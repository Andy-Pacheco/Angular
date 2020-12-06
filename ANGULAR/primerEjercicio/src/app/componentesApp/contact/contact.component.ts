import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public title: string = 'Contact';
  public relleno:boolean = false;
  public revisado:boolean = false;

  public email:string = '';
  public password:string = '';
  public address:string = '';
  public address2:string = '';
  public city:string = '';
  public zip:number;

  public show:boolean = false;

  constructor(private modificoTitulo:Title) { }

  ngOnInit(): void {
    this.modificoTitulo.setTitle(this.title);
  }

  rellenado(){
    this.relleno = true;
  }

  revisar(){
    this.revisado = !this.revisado;
  }

  editar(){
    this.relleno = false;
  }

  showPass(){
    this.show = !this.show;
  }

}
