import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  url: string = 'http://localhost:3003/api'
  obtenerPeliculas(){
    return this.http.get(`${this.url}/peliculas`);
  };

  peliculaNueva(peliculaId){
    return this.http.post(`${this.url}/peliculas`, peliculaId)
  }

  borradoPelicula(id){
    return this.http.delete(`${this.url}/peliculas/${id}`)
  }

  actualizarPelicula(pelicula){
    return this.http.put(`${this.url}/peliculas/${pelicula.id}`, pelicula)
  }

  subirImagen(file:FormData):Observable<any>{
    return this.http.post(`${this.url}/imagenes`, file);
  }
}
