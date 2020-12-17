import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  regularEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;   
  loginUsuario = this.forms.group({
    email: ['', [Validators.required, Validators.pattern(this.regularEmail)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  constructor(private forms:FormBuilder) { }

  ngOnInit(): void {
  }

  compruebaUser(){
    console.log(this.loginUsuario);
    const infoFormulario = this.loginUsuario.value;
    console.log(infoFormulario)
    // servicio
  }

  mensajeError(info:string):string{
    let mensajeError:string;
    if (this.loginUsuario.get(info).errors.required){
      mensajeError = 'Por favor indique info';
    }else if (this.loginUsuario.get(info).hasError('pattern')){
      mensajeError = 'Escriba el email correctamente';
    }else if (this.loginUsuario.get(info).hasError('minlength')){
      mensajeError = 'Por favor el password debe tener al menos 8 caracteres';
    }
    return mensajeError;
  }

  validacionDeInput(info:string):boolean{
    if((this.loginUsuario.get(info).touched || this.loginUsuario.get(info).dirty)
        && this.loginUsuario.get(info).invalid){
        return true;
    } else{
      return false;
    }
  }
}
