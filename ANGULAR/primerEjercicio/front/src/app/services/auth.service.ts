import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../interfaces/user';
import { JwtResponseI } from '../interfaces/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:4000';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor( private httpClient: HttpClient) { }

  register(user:UserI): Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
    user).pipe(tap(
      (res:JwtResponseI) =>{
        if (res){
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn)
        }
      })
      );
  }

  login(user:UserI): Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res:JwtResponseI) =>{
        if (res){
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn)
        }
      })
      );
  }

  logout(){
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token:string, expiresIn:string): void{
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }

  private getToken(){
    if (!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token;
  }
}
