drop database if exists videoclub;
create database videoclub;
use videoclub;

create table administrador(
	id int not null auto_increment primary key, 
	nombre varchar(100) not null default'indefinido', 
	email varchar(100) not null,
	pass varchar(15) not null, 
	imagen varchar(220) 
);
create table usuario(
	id int not null auto_increment primary key, 
	nombre varchar(100) not null default'indefinido', 
	email varchar(100) not null,
	pass varchar(15) not null, 
	imagen varchar(220) 
);
create table peliculas(
	id int not null auto_increment primary key,  
    titulo varchar(100),
    actor varchar(100),
    categoria varchar(50),
    imagen varchar(220),
    fecha datetime default current_timestamp,
	id_usuario int default 1, 
    constraint FK_usuario_id_usuario foreign key (id_usuario) references usuario(id) on update cascade on delete set null
);

insert into administrador (nombre, email, pass) values ('angel', 'angel@gmail.com', 'angel');
insert into administrador (nombre, email, pass) values ('maria', 'maria@gmail.com', 'maria');
select * from administrador;
select * from peliculas;