import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http:HttpClient) { }

  suboImagen(fichero){
    return this.http.post(`${environment.url}/imagen`, fichero)
  }
}
