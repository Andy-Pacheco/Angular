import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor() { }

  @HostBinding('class.marcado') private aplicar:boolean = false;

  @HostListener('mouseover') onOver(){
    this.aplicar = true;
  }
  @HostListener('mouseout') onOut(){
    this.aplicar = false;
  }

}
 