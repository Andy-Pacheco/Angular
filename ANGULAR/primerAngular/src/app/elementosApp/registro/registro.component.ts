import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user:string = 'User';
  public password:string = 'Password';

  constructor() { }

  ngOnInit(): void {
    
  }

}
