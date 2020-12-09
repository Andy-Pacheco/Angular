import { Component, OnInit } from '@angular/core';
import { LibrosService} from '../../conexionBack/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros:any = []; 

  constructor(private servicioLibros:LibrosService) { }

  ngOnInit(): void {
    this.servicioLibros.obtenerLibros().subscribe(
      cantidadLibros => {
        this.libros = cantidadLibros
      },
      error => console.log(error)
    );
  }

}
