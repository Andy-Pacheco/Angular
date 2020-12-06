import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title: string = 'Primer Ejercicio';

  constructor(private modificoTitulo:Title) { }

  ngOnInit(): void {
  }

  onClick():void{
    this.modificoTitulo.setTitle(this.title);
  }

}
