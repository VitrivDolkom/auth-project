export const getCookieExpiration = (cookieName: string): Date | null => {
  const cookies = document.cookie.split('; ');
  let cookieText: string[];
  let expiresTime: RegExpMatchArray | null;

  cookies.forEach((cookie) => {
    cookieText = cookie.split('=');

    if (cookieText[0] === cookieName) {
      expiresTime = cookieText[1].match(/expires=([^\s;]+)/);

      return expiresTime ? new Date(expiresTime[1]) : null;
    }
  });

  return null;
};
