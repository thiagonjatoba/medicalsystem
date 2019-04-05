import { config } from '../config';
import { handleResponse } from '../config';

export const TOKEN_KEY = "token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const token = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export function authHeader() {
  // return authorization header with jwt token
  let token = getToken();

  if (token) {
      return { 'Content-Type': 'application/json', 'Authorization': 'MEDICALSYSTEM ' + token };
  } else {
      return {};
  }
}

export const autenticar = (login, senha) => {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, senha })
  };

  return fetch(`${config.baseURL}/seguranca/autenticar`, requestOptions)
      .then(handleResponse)
      .then(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // localStorage.setItem('user', JSON.stringify(user));
          window.location = '/main';
          token(user.Key);

          return user;
      });
}