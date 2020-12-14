import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  libros:any = [];

  constructor(private servicioLibros:LibrosService) { }

  ngOnInit(): void {
    this.servicioLibros.accesoLibros().subscribe(
      res => { this.libros = res;}, error =>console.log(error)
      );
  }

}
