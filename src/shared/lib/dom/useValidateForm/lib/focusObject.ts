export const getDefaultObject = <T extends Record<string, string>>(obj: T): T => {
  type K = keyof T;
  let k: K;
  const newObj = { ...obj };

  for (k in obj) {
    obj[k] = '' as T[K];
  }

  return newObj;
};
