import { HttpHeaders } from '@angular/common/http';
import axios from 'axios';

const API_URL_LOGIN = 'http://localhost:3000/api/auth/signin';
const API_URL_SIGNUP = 'http://localhost:3000/api/auth/signup';
const API_URL_LOGOUT = 'http://localhost:3000/api/auth/signout';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

export class apiService {
  signup = (userName: any, password: any, email: any) => {
    return axios
      .post(API_URL_SIGNUP, {
        userName,
        password,
        email,
      })
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          {
            /*Save JWT in localStorage */
          }
          localStorage.setItem('username', userName);
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  };

  login(userName: string, password: string) {
    console.log('login');
    return axios
      .post(API_URL_LOGIN, {
        userName,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.accessToken) {
          {
            /*Save JWT in localStorage */
          }
          localStorage.setItem('username', userName);
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('token', response.data.accessToken);
          
        }

        return response.data;
      });
  }
  

  logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  
}
