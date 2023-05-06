import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post<any>(
      'https://orca-app-jhg4l.ondigitalocean.app/api/auth/register',
      data
    );
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(
      'https://orca-app-jhg4l.ondigitalocean.app/api/auth/login',
      data
    );
  }

  logout() {
    localStorage.clear();
  }

  getToken(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

}
