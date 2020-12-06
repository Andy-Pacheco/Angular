import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string = 'About';

  constructor(private modificoTitulo:Title) {}

  ngOnInit(): void {
    this.modificoTitulo.setTitle(this.title)
  }

  @HostBinding('class.tachado') private apply:boolean = false;

  
  changed(){
    this.apply = !this.apply;
  }

}
