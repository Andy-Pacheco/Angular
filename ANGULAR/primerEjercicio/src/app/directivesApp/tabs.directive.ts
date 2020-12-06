import { Directive, HostBinding, HostListener  } from '@angular/core';

@Directive({
  selector: '[appTabs]'
})
export class TabsDirective {

  constructor() { }

  //classAttribute:string = 'activado text-secondary'
  @HostBinding('class.activado')  private aplicar:boolean = false;
  @HostBinding('class.text-warning')  private aplicar2:boolean = false;
  @HostBinding('class.bg-white')  private aplicar3:boolean = false;

  @HostListener('mouseover') onOver(){
    this.aplicar = true;
    this.aplicar3 = true;
  }

  @HostListener('click') onClick(){
    this.aplicar2 = true;
  }
  
  @HostListener('mouseout') onOut(){
    this.aplicar = false;
    this.aplicar3 = false;
  }
}
