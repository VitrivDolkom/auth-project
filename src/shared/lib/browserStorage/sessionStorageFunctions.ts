export function getFromSessionStorage<T>(key: string, defaultValue: T): T {
  const sessionStorageValue = sessionStorage.getItem(key) || '';

  if (sessionStorageValue !== '') {
    return JSON.parse(sessionStorageValue);
  }

  return defaultValue;
}

export function setToSessionStorage<T>(key: string, value: T) {
  sessionStorage.setItem(key, JSON.stringify(value));
}
