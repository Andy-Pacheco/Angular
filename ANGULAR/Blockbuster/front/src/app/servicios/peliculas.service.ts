import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  url: string = 'http://localhost:3003/api'
  obtenerPeliculas(){
    return this.http.get(`${this.url}/peliculas`);
  };

  peliculaNueva(pelicula, info){
    return this.http.post(`${this.url}/peliculas`, pelicula)
  }

  borradoPelicula(id){
    return this.http.delete(`${this.url}/peliculas/${id}`)
  }

  actualizarPelicula(id:number, pelicula){
    return this.http.put(`${this.url}/peliculas/${id}`, pelicula)
  }
}
