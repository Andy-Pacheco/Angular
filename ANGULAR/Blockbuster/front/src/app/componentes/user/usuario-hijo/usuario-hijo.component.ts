import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario-hijo',
  templateUrl: './usuario-hijo.component.html',
  styleUrls: ['./usuario-hijo.component.css']
})
export class UsuarioHijoComponent implements OnInit {

  @Input('padre') info = 'Información contenida en elemento hijo';

  @Output() hijoPadre = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  envio(){
    this.hijoPadre.emit('Envío informacion');
  }
}
