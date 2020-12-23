import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {PersonasService} from '../../servicios/personas.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  infoUser:any = {
    id: null,
    token:''
  }

  accesoUsuario:boolean = false

  acceso = this.forms.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]

  });

  constructor(private forms:FormBuilder, private servicioPersonas:PersonasService) { }

  ngOnInit(): void {
  }

  comprueboAcceso(){
    this.servicioPersonas.comprueboUser(this.acceso.value).subscribe(
      res =>{
        console.log(res)
        alert('usuario válido');
      }, error => console.log(error)
    )
    console.log(this.acceso.value)
  }

  validar(dato:string):boolean {
    return ((this.acceso.get(dato)!.touched || this.acceso.get(dato)!.dirty) && this.acceso.get(dato)!.invalid);
  }

  mensajeError(info:string):string{
    let error:string;
    if(this.acceso.get(info)!.errors!.required){
      error = 'por favor indique los datos solicitados';
    }else if(this.acceso.get(info)!.errors!.email){
      error = 'Por favor inserte email correctamente';
    }else if(this.acceso.get(info)!.hasError('minlength')){
      error = 'La contraseña debe tener al menos 6 caracteres';
    }
    return error!;
  }

}
