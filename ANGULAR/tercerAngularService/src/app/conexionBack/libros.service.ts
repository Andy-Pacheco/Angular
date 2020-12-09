import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  urlLibros:string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  public obtenerLibros(){
    return this.http.get(`${this.urlLibros}/libreria`);
  }

  public filtrarLibros(){
    //return this.http.get(`${this.urlLibros}/`)
  }

  //public guardarLibros(libro){
    //return this.http.post(`${this.urlLibros}/libros`, libro);
 // }

 // public actualizarLibros(id:string, libro:Libro){
    // return this.http.put(`${this.urlLibros}/libros/${id}`)
  //}

  //public borrarLibros(id:string){
    // return this.http.delete(`${this.urlLibros}/libros/${id}`);
 // }
}
