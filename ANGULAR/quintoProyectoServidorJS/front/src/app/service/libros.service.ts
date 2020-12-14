import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) { }

  accesoLibros(){
    return this.http.get(`${environment.url}/libros`)
  }

  guardarLibro(libro){
    return this.http.post(`${environment.url}/libros`, libro);
  }

  borrarLibro(id){
    return this.http.delete(`${environment.url}/libros/${id}`)
  }

  actualizarLibro(id:number, libro){
    return this.http.put(`${environment.url}/libros/${id}`, libro)
  }
}
