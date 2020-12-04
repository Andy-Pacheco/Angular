import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  title:string = 'Directivas'
  edad:number = 0;
  infoUser:number = 0;
  mostrarTexto:boolean = false;
  personas:any[] = [
    {nombre:'Maria', edad:25, profesion:'fontaneria'},
    {nombre:'Martin', edad:17, profesion:'Estudiante'},
    {nombre:'Javier', edad: 32, profesion:'Cocinero'},
    {nombre:'Lucia', edad:38, profesion:'Desarrolladora software'}
  ]

  constructor(private modificoTitulo:Title) { }

  ngOnInit(): void {
    this.modificoTitulo.setTitle(this.title)
  }

  actualizaTexto(){

    if (this.mostrarTexto){
      this.mostrarTexto = false;
    }else{
      this.mostrarTexto = true;
    };
  };

  muestraElementos(){
    for (let persona of this.personas){
      
    }
  }

  obtengoEdad(){
    this.edad = this.infoUser;
  }
};
