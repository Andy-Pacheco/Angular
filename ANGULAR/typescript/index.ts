// declaración variables ts. 
var cadenaTexto:string = 'Hola';
var edad:number = 35;
var condicion:boolean = false;
var valor:number = 35;
​
​
var variable:any = 'hello';
​
var colores:string[] = ['Rojo', 'Verde' ];
var miArray:any[] = [1, 'Rojo', false];
var loteria:number[]= [34,25,1,45];
​
​
// funciones.
let nombre:string = 'Pedro';
let apellido:string = 'Muñoz';
​
​
/**
 * function datos(nombre, apellido='Sin indicar'){
 * }
 */
​
function datos(nombre:string, apellido?:string):string{
  if(apellido == undefined){
        return `${nombre}`;     
    }
   return `${nombre} ${apellido}`;
}
​
//document.write(datos(nombre));
/*
interface Libro {
    titulo: string; 
    autor: string;
}
​
*/
​
class Pelicula{
​
    public titulo: string;
    public actor:string;
    protected categoria: string;
    private anioAlta: number;
​
    constructor(titulo:string, actor:string, categoria:string, anioAlta:number){
        this.titulo=titulo;
        this.actor = actor;
        this.categoria = categoria;
        this.anioAlta = anioAlta;
    }
​
    public play():string{
       return `${this.titulo} dada de alta en ${this.anioAlta} inició su reproducción`;
    }
    
}
​
var p1:Pelicula= new Pelicula('Gladiator', 'Rosell', 'ficción', 1990);
// document.write(p1.play());
​
class Serie extends Pelicula{
​
    public capitulos:number;
    private temporadas:number;
​
    constructor(nombre:string, autor:string, categoria:string, anioAlta:number, capitulos:number, temporadas:number){
        super(nombre, autor, categoria, anioAlta);
        this.capitulos=capitulos;
        this.temporadas=temporadas;
    }
​
    public playSerie():string{
        return super.play();
    }
}
​
let s1 = new Serie('Ray Donovan', 'Sonia Díaz', 'ficción', 2000, 10, 7);
​
document.write(s1.playSerie());
​
class Usuario {
    // propiedades
    public nombre:string;
    protected email:string;
    private edad:number;

    // constructor
    constructor(nombre:string, email:string, edad:number){
        this.nombre=nombre;
        this.email=email;
        this.edad=edad;
    }
    //metodos
    public dadoAlta():string {
        this.getEdad();
        return `El usuario ${this.nombre} se ha registrado en la aplicación`;
    }
    private getEdad(){
        console.log( `La edad del usuario es de ${this.edad}`);
    }
}
class Alumno extends Usuario{

    public id:number;
    private curso:string;

    constructor(nombre:string, email:string, edad:number, id:number, curso:string){
        super(nombre, email, edad);
        this.id = id;
        this.curso = curso;
    }
    public pagoCurso():string{       
        return super.dadoAlta() + ` y se la ha asignado el id ${this.id} en el bootcamp ${this.curso}`;
    }
}
let alumno1 = new Alumno('María', 'maria@gmail.com', 31, 1, 'Angular');
document.write(alumno1.pagoCurso());