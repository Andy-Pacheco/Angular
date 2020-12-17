import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { AdminService } from '../../service/admin.service';


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
  admin:any = {
    name: '',
    pass: ''
  }
  inicio:boolean = true;
  constructor(private serviciosLibro:LibrosService, private servicioAdmin:AdminService) { }

  ngOnInit(): void {
    this.logueado();
    //this.mostrarLibros();
  }

  logueado(){
    const tokenOriginal = this.servicioAdmin.dameToken();
    if(localStorage.getItem('codigoAcceso') == tokenOriginal){
      this.inicio = false;
      this.mostrarLibros();
    }
  }

  cierreSesion(){
    localStorage.removeItem('codigoAcceso');
    this.admin = {
      name: '',
      pass: ''
    };
    this.inicio = true;
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

  compruebaAcceso(){
    this.servicioAdmin.compruebaAcceso(this.admin).subscribe(
      res => {
        this.servicioAdmin.guardoToken(res['token']);
        if(res['token'] !== null){
          this.inicio = false;
          this.mostrarLibros();
        }
      }, error => alert(error.error)
    );
  };
}
