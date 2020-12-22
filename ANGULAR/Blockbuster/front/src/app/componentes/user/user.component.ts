import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  accesoUser = this.forms.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]]
  });
  noAcceso:boolean = true;

  constructor(private forms:FormBuilder ) { }

  ngOnInit(): void {
  }

  comprueboUser(){
    console.log('accedo a función')
  }
}
