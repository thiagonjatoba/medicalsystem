import { token } from "./authService";
import { authHeader } from "./authService";
import { config } from '../config';
import { handleResponse } from '../config';

export const acessar = () => {
    const requestOptions = {
        method: 'GET',
        // headers: { 'Content-Type': 'application/json' }
        headers: authHeader()
    };

    return fetch(`${config.baseURL}/operacao/recuperarConvenios`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            // localStorage.setItem('user', JSON.stringify(user));
            window.location = '/signup';
            token(user.Key);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

