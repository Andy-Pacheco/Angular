import { Request, Response} from 'express';

class ControladorIndex{

    public inicio(req:Request, res:Response){
        res.send('ruta de inicio de mi app utilizando controlador')
    }
}

const controladorIndex = new ControladorIndex();

export default controladorIndex;