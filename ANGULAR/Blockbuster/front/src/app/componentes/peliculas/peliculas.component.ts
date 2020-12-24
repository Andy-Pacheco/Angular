import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(private servicioPeliculas:PeliculasService) { }

  peliculas:any = [];
  ngOnInit(): void {
    this.servicioPeliculas.obtenerPeliculas().subscribe(
      res => {
        console.log(res);
        this.peliculas = res;
      }, error => console.log(error)
    )
  }

}
