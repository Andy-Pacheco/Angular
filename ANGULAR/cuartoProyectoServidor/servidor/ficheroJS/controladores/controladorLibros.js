"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBBDD_1 = __importDefault(require("../conexionBBDD"));
class ControladorLibros {
    mostrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBBDD_1.default.query(`SELECT * FROM libros`, (err, result, fields) => {
                res.json(result);
            });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBBDD_1.default.query(`INSERT INTO libros SET ?`, [req.body]);
            res.json({ text: 'libro guardado' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            yield conexionBBDD_1.default.query(`DELETE FROM libros WHERE id=${id}`);
            res.json({ text: 'libro borrado' });
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let { autor, titulo, categoria, descripcion, imagen } = req.body;
            yield conexionBBDD_1.default.query('UPDATE libros SET ? WHERE id=?', [req.body, id]);
        });
    }
    filtrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            yield conexionBBDD_1.default.query(`SELECT * FROM libros WHERE id=?`, [id], (error, resultado, fields) => {
                res.json(resultado);
            });
        });
    }
}
const queryBBDD = new ControladorLibros();
exports.default = queryBBDD;
