import type { Copy } from '@/i18n';

type Grecaptcha = {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
};
declare global { interface Window { grecaptcha?: Grecaptcha } }

const form = document.querySelector<HTMLFormElement>('.quote-form');
const messages = JSON.parse(form?.dataset.messages || '{}') as Copy['form']['messages'];
const filesInput = form?.querySelector<HTMLInputElement>('[name="attachments"]');
const fileList = form?.querySelector<HTMLUListElement>('.file-list');
const errorBox = form?.querySelector<HTMLElement>('.form-error');
const progress = form?.querySelector<HTMLElement>('.form-progress');
const submit = form?.querySelector<HTMLButtonElement>('[type="submit"]');
const allowed = /\.(pdf|docx?|odt|txt|jpe?g|png)$/i;
let sending = false;

function showError(message: string) {
  if (!errorBox) return;
  errorBox.textContent = message;
  errorBox.hidden = false;
}

filesInput?.addEventListener('change', () => {
  fileList?.replaceChildren(...Array.from(filesInput.files || []).map(file => {
    const item = document.createElement('li');
    item.textContent = file.name + ' (' + (file.size / 1024 / 1024).toFixed(1) + ' MB)';
    return item;
  }));
});

async function encodeFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(messages.read + ' ' + file.name));
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
    reader.readAsDataURL(file);
  });
}

async function recaptchaToken(siteKey: string): Promise<string> {
  if (!siteKey) return '';
  if (!window.grecaptcha) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=' + encodeURIComponent(siteKey) + '&hl=' + document.documentElement.lang;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(messages.antispam));
      document.head.append(script);
    });
  }
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error(messages.antispam)), 20000);
    const captcha = window.grecaptcha;
    if (!captcha) { clearTimeout(timer); reject(new Error(messages.antispam)); return; }
    captcha.ready(() => {
      captcha.execute(siteKey, { action: 'contact' }).then(resolve, reject).finally(() => clearTimeout(timer));
    });
  });
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (sending || !form.reportValidity()) return;
  if (errorBox) errorBox.hidden = true;
  const files = Array.from(filesInput?.files || []);
  if (files.length > 12) { showError(messages.count); return; }
  if (files.some(file => !allowed.test(file.name))) { showError(messages.type); return; }
  if (files.some(file => file.size > 8 * 1024 * 1024)) { showError(messages.single); return; }
  if (files.reduce((sum, file) => sum + file.size, 0) > 10 * 1024 * 1024) { showError(messages.total); return; }

  sending = true;
  if (submit) submit.disabled = true;
  if (progress) { progress.classList.remove('is-success'); progress.textContent = messages.sending; }
  try {
    const fields = new FormData(form);
    const payload = Object.fromEntries(['name', 'email', 'phone', 'from_language', 'to_language', 'translation_type', 'message'].map(key => [key, String(fields.get(key) || '').trim()]));
    const attachments = await Promise.all(files.map(async file => ({
      filename: file.name, mime_type: file.type || 'application/octet-stream', content_base64: await encodeFile(file),
    })));
    let token: string;
    try { token = await recaptchaToken(form.dataset.recaptchaKey || ''); } catch { throw new Error(messages.antispam); }
    const response = await fetch(form.action, {
      method: 'POST',
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...payload, source_site: 'https://transla.website', recaptcha_token: token, files: attachments }),
    });
    if (!response.ok) {
      if (response.status === 413) throw new Error(messages.large);
      if (response.status === 429) throw new Error(messages.rate);
      if (response.status === 422) throw new Error(messages.invalid);
      if (response.status === 400) throw new Error(messages.antispam);
      throw new Error(messages.error);
    }
    const result = await response.json() as { success?: boolean };
    if (!result.success) throw new Error(messages.error);
    form.reset();
    fileList?.replaceChildren();
    if (progress) { progress.classList.add('is-success'); progress.textContent = messages.success; }
  } catch (error) {
    if (progress) progress.textContent = '';
    showError(error instanceof TypeError ? messages.error : error instanceof Error ? error.message : messages.error);
  } finally {
    sending = false;
    if (submit) submit.disabled = false;
  }
});
