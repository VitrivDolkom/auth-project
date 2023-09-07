export function isValidatedForm<T extends Partial<Record<string, string>>>(errors: T) {
  for (const key in errors) {
    if (errors[key] !== '') {
      return false;
    }
  }

  return true;
}
