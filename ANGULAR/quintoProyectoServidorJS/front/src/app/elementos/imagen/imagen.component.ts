import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  fichero:File;

  constructor( private serviceImagen:ImagenService) { }

  ngOnInit(): void {
  }

  cargoFichero(evento){
    
    this.fichero = evento.target.files;
    console.log(this.fichero)
  }

  subirImagen(){
    let info = new FormData
    info.append('imagen', this.fichero[0], this.fichero[0].name);
    this.serviceImagen.suboImagen(info).subscribe(
      res =>{
        console.log(res)
      },
      error => console.log(error)
    )
  }
}
