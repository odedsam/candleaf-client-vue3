// Store previous cookies to detect new ones
let previousCookies = {};

export const getCookiesIdentifiers = () => {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=').map((c) => c.trim());
    if (name) {
      acc[name] = value || '';
    }
    return acc;
  }, {});

  // Log all cookies
  console.log('All cookies:', cookies);

  // Detect new cookies since last check
  const newCookies = {};
  Object.entries(cookies).forEach(([name, value]) => {
    if (!previousCookies[name] || previousCookies[name] !== value) {
      newCookies[name] = value;
    }
    console.log(`Cookie: ${name} = ${value}`);
  });

  if (Object.keys(newCookies).length > 0) {
    console.log('🆕 NEW/CHANGED COOKIES:', newCookies);
  }

  // Update previous cookies for next comparison
  previousCookies = { ...cookies };

  return cookies;
};

// Function to monitor cookies before and after a backend request
export const monitorCookiesAroundRequest = async (requestFunction) => {
  console.log('--- BEFORE REQUEST ---');
  const beforeCookies = getCookiesIdentifiers();

  const result = await requestFunction();

  console.log('--- AFTER REQUEST ---');
  const afterCookies = getCookiesIdentifiers();

  return { beforeCookies, afterCookies, result };
};




// Find a specific cookie by name
export const findCookie = (searchName) => {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    if (name) acc[name] = value;
    return acc;
  }, {});

  // Search for partial matches
  const matches = Object.keys(cookies).filter(name =>
    name.toLowerCase().includes(searchName.toLowerCase())
  );

  console.log(`🔍 Searching for "${searchName}":`, matches);
  matches.forEach(name => console.log(`${name}: ${cookies[name]}`));

  return matches.length > 0 ? cookies[matches[0]] : null;
};

// Show all cookies in table
export const showCookiesTable = () => {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    if (name) acc[name] = value;
    return acc;
  }, {});

  console.table(cookies);
  return cookies;
};










// usage example for monitorCookiesAroundRequest :

// Method 1: Monitor around a specific request

/* await monitorCookiesAroundRequest(async () => {
  return fetch('/api/login', {
    method: 'POST',
    credentials: 'include', // Important for cookies
    body: JSON.stringify({ username, password })
  });
}); */

// Method 2: Just check what changed
// getCookiesIdentifiers(); // Call before request
// ... make your backend request ...
// getCookiesIdentifiers(); // Call after - will show new cookies
