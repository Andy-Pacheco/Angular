import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  noAcceso:boolean = false;
  accesoAdmin =this.forms.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private forms:FormBuilder) { }

  ngOnInit(): void {
  }

  comprueboAdmin(){}
}
