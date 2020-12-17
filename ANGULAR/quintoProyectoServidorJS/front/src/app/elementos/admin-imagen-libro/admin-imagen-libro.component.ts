import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { LibrosService } from '../../service/libros.service';
import { ImagenService} from '../../service/imagen.service'

@Component({
  selector: 'app-admin-imagen-libro',
  templateUrl: './admin-imagen-libro.component.html',
  styleUrls: ['./admin-imagen-libro.component.css']
})
export class AdminImagenLibroComponent implements OnInit {

  fichero:File ;

  guardoLibroImagen = this.forms.group({
    titulo: ['',[Validators.required]],
    categoria: ['',[Validators.required]],
    autor: ['',[Validators.required]],
    imagen: ['',[Validators.required]],
    descripcion: ['',[Validators.required]]
  })

  libros:any = []

  detectoFichero(evento){
    console.log(evento)
    this.fichero =  evento.target.files;
    console.log(this.fichero[0])
  }

  nuevoLibro(){
    console.log('detecto el envio de libro')
    const valorInput = this.guardoLibroImagen.value;
    console.log(valorInput);
    let date = new Date();
    let fecha = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
    let nombre = fecha + '-' + this.fichero[0].name;
    console.log(nombre);

    valorInput.imagen = `http://localhost:4000/imagenes/${nombre}`;
    this.serviceLibros.guardarLibro(valorInput).subscribe(
      res => {
        this.mostrarLibros();
      }, error => console.log(error)
    )

  let fichero = new FormData();
  fichero.append('imagen', this.fichero[0], nombre)
  this.serviceImagen.suboImagen(fichero).subscribe(
    res =>{
      console.log(res)
    }, error => console.log(error)
  );
  }

  mostrarLibros(){
    this.serviceLibros.accesoLibros().subscribe(
      res=> {
        this.libros = res
      },
      error =>console.log(error)
    );
  }

  constructor(private serviceLibros:LibrosService, private serviceImagen: ImagenService, private forms:FormBuilder) { }


  ngOnInit(): void {
  }

}
