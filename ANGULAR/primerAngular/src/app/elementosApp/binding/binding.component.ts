import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public nombre:string = 'Juan';
  public info:string = '';
  private edad:number = 22;

  constructor() { }

  ngOnInit(): void {
  
  }

  public getEdad():string{
    if(this.edad > 18){
      return `Usuario capacitado para registrarse. La edad del usuario es ${this.edad}`;
    }else{
      return `La edad del usuario, ${this.edad}, no da opcion a registro`;
    }
  }

}
