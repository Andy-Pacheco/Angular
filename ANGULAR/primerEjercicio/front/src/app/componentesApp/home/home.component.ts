import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Primer Ejercicio';

  constructor(private modificoTitulo:Title) {}

  ngOnInit(): void {
    this.modificoTitulo.setTitle(this.title);
  }

}
