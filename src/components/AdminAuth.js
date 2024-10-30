// loginauth.js

let loggedIn = false;

export const login = (username, password) => {
  // Check if username and password are correct
  if (username === 'abcd' && password === '1234') {
    loggedIn = true;
    // Set session expiration after 1 minute
    setTimeout(() => {
      loggedIn = false;
    }, 60000); // 1 minute = 60,000 milliseconds
  } else {
    loggedIn = false;
  }
};

export const logout = () => {
  loggedIn = false;
};

export const isLoggedIn = () => {
  return loggedIn;
};
