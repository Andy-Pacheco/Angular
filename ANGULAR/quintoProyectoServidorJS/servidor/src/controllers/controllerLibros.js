const express = require('express');
const bd = require('../config/conexionDB');
/*
let consultas = {};

consultas.mostrar = async (req, res) =>{
    await bd.query(`SELECT * FROM libros`, (error, resultado, fields) =>{
        res.json(resultado);
    })
}

module.exports = consultas; */

class ControladorLibros{
    async mostrar(req, res){
        await bd.query(`SELECT * FROM libros`, (error, resultado, fields) =>{
            res.json(resultado);
        })
    }

    async filtrar(req, res){
        const id = req.params.id;
        await bd.query('`SELECT * FROM libros WHERE id = ?', [id], (error, resultado, fields) =>{
            res.json(resultado)
        })
    }

    async crear(req, res){
        await bd.query('INSERT INTO libros SET ?', [req.body]);
        console.log(req.body);
        res.json({text: 'Libros guardados en BBDD'})
    }
    async borrar(req, res){
        const id = req.params.id;
        await bd.query(`DELETE FROM libros WHERE id = ?`, [id]);
        res.json({text: 'Libro eliminado'});
    }
    async actualizar(req, res){
        const id = req.params.id;
        await bd.query(`UPDATE libros SET ? WHERE id = ?`, [req.body, id])
    }
}

module.exports = new ControladorLibros;