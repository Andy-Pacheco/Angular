import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token = '';

  constructor( private http:HttpClient) { }

  compruebaAcceso(admin){
    return this.http.post(`${environment.url}/admin/token`, admin)
  }

  guardoToken(codigoAcceso){
    localStorage.setItem('codigoAcceso', codigoAcceso)
    alert(codigoAcceso);
    this.token = codigoAcceso;
  }

  dameToken(){
    return this.token
  }
}
