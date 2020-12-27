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
  urlImagen:string = '';
  peliculas:any = [];
  usuarios: any = [];
  imagenPelicula:File;
  imagenUsuario:File;
  id:any;

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
    id:[0, []],
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

  constructor(private forms:FormBuilder,private servicioPelicula: PeliculasService ,private servicioPersonas:PersonasService) { }

  ngOnInit(): void {
    this.accesoOk = false;
    this.compruebaLogin();
  }

  compruebaLogin(){
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    this.servicioPersonas.verificaToken({token: tokenAdmin}).subscribe(
      res => {
        this.accesoOk = res['tokenOk'];
        this.mostrarPeliculas();
        this.mostrarUsuarios();
      }, error => console.log(error)
    );
  }

  logout(){
    this.servicioPersonas.elimnaTokenAdmin();
    this.compruebaLogin();
  }

  comprueboAdmin(){
    this.servicioPersonas.comprueboAdmin(this.accesoAdmin.value).subscribe(
      res =>{
        if (res['token'] != null){
          this.id = res['id'];
          this.servicioPersonas.guardoToken(res['token'])
          this.compruebaLogin();
        }
        alert('usuario válido');
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
    this.servicioPelicula.peliculaNueva(this.pelicula.value).subscribe(
      res =>{
        this.mostrarPeliculas();
        this.pelicula.reset();
      }, error => console.log(error)
    );
  }

  actualizoPelicula(){
    if (this.modificoInfoPelicula.value.cover == ''){
      this.modificoInfoPelicula.value.cover = this.urlImagen;
    }
    this.servicioPelicula.actualizarPelicula(this.modificoInfoPelicula.value.id, this.modificoInfoPelicula.value).subscribe(
      res =>{
        this.mostrarPeliculas();
        
      }, error => console.log(error)
      )
  }

  cargoValoresPelicula(pelicula){
    this.modificoInfoPelicula = this.forms.group({
      id: [pelicula.movie_id, []],
      title: [pelicula.title, []],
      director: [pelicula.director, []],
      year: [pelicula.year, []],
      cover: [pelicula.cover, []]
    });
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
        this.peliculas = res;
      }, error => console.log(error)
    )
  }

  guardoUsuario(){
    let info = new FormData();
    info.append('imagenUsuario', this.imagenUsuario[0], this.imagenUsuario.name);
    this.servicioPersonas.nuevoUser(this.user.value).subscribe(
      res =>{
        console.log('doy de alta el usuario')
        this.mostrarUsuarios();
        this.user.reset();
      }, error => console.log(error)
    );
  }

  borroUsuario(id:number){
    this.servicioPersonas.borroUsuario(id).subscribe(
      res =>{
        this.mostrarUsuarios();
      }, error => console.log(error)
    );
  }

  mostrarUsuarios(){
    this.servicioPersonas.mostrarUsuarios().subscribe(
      res => {
        this.usuarios = res;
      }, error => console.log(error)
    )
  }

  modificoEstadoInputFileUser(e){
    this.imagenUsuario = e.target.files; 
  }
  modificoEstadoInputFilePelicula(e){
    this.imagenPelicula = e.target.files; 
  }
}
