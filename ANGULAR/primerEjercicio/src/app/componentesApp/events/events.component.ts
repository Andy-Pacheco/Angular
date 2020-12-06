import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  title:string = 'Events';

  constructor(private modificoTitulo:Title) { }

  ngOnInit(): void {
    this.modificoTitulo.setTitle(this.title);
  }

}
