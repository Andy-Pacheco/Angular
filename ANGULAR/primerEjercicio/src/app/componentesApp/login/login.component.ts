import { Component, HostBinding, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string = 'Login';

  constructor(private modificoTitulo:Title) {}
  
  public clicked:boolean = false;
  public logged:boolean = false;
  public failed:boolean;

  public email:string = "prueba@prueba.com";
  public pass:number = 12345678;
  emailIn:string;
  passIn:number;

  ngOnInit(): void {
    this.modificoTitulo.setTitle(this.title);
  }

  changeBg(){
    this.clicked = true;
  }

  checkToken(){
    if (this.email == this.emailIn && this.pass == this.passIn){
      this.logged = true;
    }else{
      this.logged = true;
      this.failed = true;
    }
  }

  tryAgain(){
    this.logged = false;
    this.failed = false;
  }

}
