import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url: string = 'http://localhost:3003/api';
  tokenUser:string;
  idUser:number;

  constructor(private http:HttpClient) { }

  comprueboUser(user){
    return this.http.post(`${this.url}/user`, user);
  }

  comprueboAdmin(admin){
    return this.http.post(`${this.url}/admin`, admin);
  }

  nuevoUser(user){
    return this.http.post(`${this.url}/user/newUser`, user)
  }

  borroUsuario(id){
    return this.http.delete(`${this.url}/user/${id}`)
  }

  mostrarUsuarios(){
    return this.http.get(`${this.url}/user`)
  }

  guardoToken(token){
    localStorage.setItem('tokenAdmin', token);
  }

  guardoTokenUser(token){
    localStorage.setItem('tokenUser', token);
  }

  verificaToken(token){
    return this.http.post(`${this.url}/admin/token`, token);
  }

  elimnaTokenAdmin(){
    localStorage.removeItem('tokenAdmin');
  }

  elimnaTokenUser(){
    localStorage.removeItem('tokenUser');
  }
}
