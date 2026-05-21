import { translations } from '../constants/translations';

export const t = (keyPath, language) => {
  const keys = keyPath.split('.');
  let value = translations;

  for (const key of keys) {
    const parsedKey = isNaN(key) ? key : parseInt(key);
    value = value?.[parsedKey];

    if (value === undefined) return keyPath;
  }

  if (typeof value === 'object' && value !== null && ('pt-br' in value || 'en' in value)) {
    return value[language] ?? value['pt-br'] ?? keyPath;
  }

  return value;
};

export const getTranslation = (value, language) => {
  if (typeof value === 'object' && value !== null && ('pt-br' in value || 'en' in value)) {
    return value[language] ?? value['pt-br'] ?? '';
  }
  return value;
};
