import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reguladora',
  templateUrl: './reguladora.component.html',
  styleUrls: ['./reguladora.component.css']
})
export class ReguladoraComponent implements OnInit {

  public usuario = {
    name:'',
    email:'',
    phone:undefined
  }

  constructor() { }

  ngOnInit(): void {
  }

  comprueboNombre = new RegExp(/[a-zA-Z]/);
  comprueboEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  comprueboTelef = new RegExp(/^[0-9]{2,3}-? ?[0-9]{6,7}$/);
  
  comprobar(){
    if (!this.comprueboNombre.test(this.usuario.name)){
      alert('El nombre contiene números y no es válido');
    }else if (!this.comprueboEmail.test(this.usuario.email)){
      alert('El correo no es válido');
    }else if (!this.comprueboTelef.test(this.usuario.phone)){
      alert('El telefono no está bien')
    }else{
      alert('Todo bien');
    }
  }

}
