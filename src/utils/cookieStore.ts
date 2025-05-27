export const getCookiesByKeys = () =>
  document.cookie.split(';').reduce((cookies: any, cookie: any) => {
    const [name, value] = cookie.split('=').map((c) => c.trim());
    const result = { ...cookies, [name]: value };
    return console.log(result);
  }, {});

export const getCookiesByKeysAndNames = () => {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=').map((c) => c.trim());
    if (name) {
      acc[name] = value || '';
    }
    return acc;
  }, {});

  console.log('All cookies:', cookies);

  Object.entries(cookies).forEach(([name, value]) => {
    console.log(`Cookie: ${name} = ${value}`);
  });

  return cookies;
};
