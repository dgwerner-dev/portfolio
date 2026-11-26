export const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return res.json();
};

export const formatRepoCount = (count) => {
  if (count < 5) return count.toString();
  return `${Math.floor(count / 5) * 5}+`;
};

export const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (navigator.maxTouchPoints > 0 || "ontouchstart" in window);

// Retorna as chaves dos campos inválidos; as mensagens vêm do i18n.
export const validateContactForm = (data) => {
  const errors = {};
  if (!data.name?.trim() || data.name.trim().length < 2) errors.name = true;
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = true;
  if (!data.subject?.trim()) errors.subject = true;
  if (!data.message?.trim() || data.message.trim().length < 10)
    errors.message = true;
  return errors;
};
