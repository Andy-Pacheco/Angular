var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// declaración variables ts. 
var cadenaTexto = 'Hola';
var edad = 35;
var condicion = false;
var valor = 35;
var variable = 'hello';
var colores = ['Rojo', 'Verde'];
var miArray = [1, 'Rojo', false];
var loteria = [34, 25, 1, 45];
// funciones.
var nombre = 'Pedro';
var apellido = 'Muñoz';
/**
 * function datos(nombre, apellido='Sin indicar'){
 * }
 */
function datos(nombre, apellido) {
    if (apellido == undefined) {
        return "" + nombre;
    }
    return nombre + " " + apellido;
}
//document.write(datos(nombre));
/*
interface Libro {
    titulo: string;
    autor: string;
}
 ​
*/
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, actor, categoria, anioAlta) {
        this.titulo = titulo;
        this.actor = actor;
        this.categoria = categoria;
        this.anioAlta = anioAlta;
    }
    Pelicula.prototype.play = function () {
        return this.titulo + " dada de alta en " + this.anioAlta + " inici\u00F3 su reproducci\u00F3n";
    };
    return Pelicula;
}());
var p1 = new Pelicula('Gladiator', 'Rosell', 'ficción', 1990);
// document.write(p1.play());
var Serie = /** @class */ (function (_super) {
    __extends(Serie, _super);
    function Serie(nombre, autor, categoria, anioAlta, capitulos, temporadas) {
        var _this = _super.call(this, nombre, autor, categoria, anioAlta) || this;
        _this.capitulos = capitulos;
        _this.temporadas = temporadas;
        return _this;
    }
    Serie.prototype.playSerie = function () {
        return _super.prototype.play.call(this);
    };
    return Serie;
}(Pelicula));
var s1 = new Serie('Ray Donovan', 'Sonia Díaz', 'ficción', 2000, 10, 7);
document.write(s1.playSerie());
var Usuario = /** @class */ (function () {
    // constructor
    function Usuario(nombre, email, edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }
    //metodos
    Usuario.prototype.dadoAlta = function () {
        this.getEdad();
        return "El usuario " + this.nombre + " se ha registrado en la aplicaci\u00F3n";
    };
    Usuario.prototype.getEdad = function () {
        console.log("La edad del usuario es de " + this.edad);
    };
    return Usuario;
}());
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, email, edad, id, curso) {
        var _this = _super.call(this, nombre, email, edad) || this;
        _this.id = id;
        _this.curso = curso;
        return _this;
    }
    Alumno.prototype.pagoCurso = function () {
        return _super.prototype.dadoAlta.call(this) + (" y se la ha asignado el id " + this.id + " en el bootcamp " + this.curso);
    };
    return Alumno;
}(Usuario));
var alumno1 = new Alumno('María', 'maria@gmail.com', 31, 1, 'Angular');
document.write(alumno1.pagoCurso());
