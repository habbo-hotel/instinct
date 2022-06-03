export function isValidUsername(username: string): boolean {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return format.test(username);
}
