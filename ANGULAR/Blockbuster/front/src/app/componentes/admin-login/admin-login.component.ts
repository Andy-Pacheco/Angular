import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { PersonasService } from 'src/app/servicios/personas.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  accesoOk:boolean = false;

  accesoAdmin = this.forms.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })

  pelicula = this.forms.group({
    title: ['', []],
    director: ['', []],
    year: ['', []],
    cover: ['', []]
  })

  modificoInfoPelicula = this.forms.group({
    title: ['', []],
    director: ['', []],
    year: ['', []],
    cover: ['', []]
  })

  user = this.forms.group({
    name:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
    avatar:['', []]
  })

  peliculas:any = [];

  imagenPelicula:File;

  constructor(private forms:FormBuilder,private servicioPelicula: PeliculasService ,private servicioPersonas:PersonasService) { }

  ngOnInit(): void {
  }

  comprueboAdmin(){
    this.servicioPersonas.comprueboUser(this.accesoAdmin.value).subscribe(
      res =>{
        console.log(res)
        alert('usuario válido');
        this.accesoOk = true;
        this.mostrarPeliculas();
      }, error => console.log(error)
    )
  }

  validar(dato:string):boolean {
    return ((this.accesoAdmin.get(dato).touched || this.accesoAdmin.get(dato).dirty) && this.accesoAdmin.get(dato).invalid);
  }

  validarUser(dato:string):boolean {
    return ((this.user.get(dato).touched || this.user.get(dato).dirty) && this.user.get(dato).invalid);
  }

  mensajeError(info:string):string{
    let error:string;
    if(this.user.get(info).errors.required){
      error = 'por favor indique los datos solicitados';
    }else if(this.user.get(info).errors.email){
      error = 'Por favor inserte email correctamente';
    }else if(this.user.get(info).hasError('minlength')){
      error = 'La contraseña debe tener al menos 6 caracteres';
    }
    return error;
  }

  mensajeErrorUser(info:string):string{
    let error:string;
    if(this.user.get(info).errors.required){
      error = 'por favor indique los datos solicitados';
    }else if(this.user.get(info).errors.email){
      error = 'Por favor inserte email correctamente';
    }else if(this.user.get(info).hasError('minlength')){
      error = 'La contraseña debe tener al menos 6 caracteres';
    }
    return error;
  }

  guardoPelicula(){
    let info = new FormData();
    info.append('imagenPelicula', this.imagenPelicula[0], this.imagenPelicula.name);

    this.servicioPelicula.peliculaNueva(this.pelicula.value, info).subscribe(
      res =>{
        this.mostrarPeliculas();
      }, error => console.log(error)
    );
  }

  actualizoPelicula(id){
    this.servicioPelicula.actualizarPelicula(id, this.modificoInfoPelicula.value).subscribe(
      res =>{
        this.mostrarPeliculas();
      }, error => console.log(error)
      )
  }

  borroPelicula(id:number){
    this.servicioPelicula.borradoPelicula(id).subscribe(
      res =>{
        this.mostrarPeliculas();
      }, error => console.log(error)
    );
  }

  mostrarPeliculas(){
    this.servicioPelicula.obtenerPeliculas().subscribe(
      res =>{
        console.log(res);
        this.peliculas = res;
      }, error => console.log(error)
    )
  }

  guardoUsuario(){
    this.servicioPersonas.nuevoUser(this.user.value).subscribe(
      res =>{
        console.log('doy de alta el usuario')
      }, error => console.log(error)
    );
  }

  modificoEstadoInputFile(e){
    this.imagenPelicula = e.target.files; 
  }
}
