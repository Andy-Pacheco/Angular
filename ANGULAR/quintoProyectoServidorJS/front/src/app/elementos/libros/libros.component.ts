import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros:any = [];
  libro:any = {
    titulo:'',
    categoria:'',
    autor:'',
    imagen:'',
    descripcion:''
  }
  libroModal:any = {
    titulo:'',
    categoria:'',
    autor:'',
    imagen:'',
    descripcion:''
  }
  constructor(private serviciosLibro:LibrosService) { }

  ngOnInit(): void {
    this.mostrarLibros();
  }

  nuevoLibro(){
    this.serviciosLibro.guardarLibro(this.libro).subscribe()
    this.libro = {
      titulo:'',
      categoria:'',
      autor:'',
      imagen:'',
      descripcion:''
    }
    this.mostrarLibros();
  }

  mostrarLibros(){
    this.serviciosLibro.accesoLibros().subscribe(
      res => {this.libros = res}, error => console.log(error)
    )
  }

  borraLibro(id:number){
    this.serviciosLibro.borrarLibro(id).subscribe(
      res => {this.mostrarLibros()}, error => console.log(error)
    );
  }

  cargoValoresLibro(libro){
    this.libroModal = libro;
  }

  actualiza(){
    this.serviciosLibro.actualizarLibro(this.libroModal.id, this.libroModal).subscribe(
      res => {
        this.mostrarLibros();
      }, error => console.log(error)
    );
  }
}
