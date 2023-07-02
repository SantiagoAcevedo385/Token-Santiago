const express=require('express');
const cookieParser = require('cookie-parser');
const cors= require('cors');
const bodyParser= require('body-parser');

const dbConnection=require('../database/config')


class server{
    constructor(){
        this.app=express();
        this.port= process.env.PORT || 8087
        this.proveedoresPath='/api/proveedores'
        this.clientesPath='/api/clientes'
        this.ventasPath='/api/ventas'
        this.pedidosPath='/api/pedidos'
        this.usuarioPath = '/api/usuario'
        this.authPath = '/api/auth'
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    middlewares() //Directorio Publico
    {
        this.app.use(cookieParser()); 
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }
    routes()
    {
        this.app.use(this.proveedoresPath, require('../routes/proveedores'))
        this.app.use(this.clientesPath, require('../routes/clientes'))
        this.app.use(this.ventasPath, require('../routes/ventas'))
        this.app.use(this.pedidosPath, require('../routes/pedidos'))
        this.app.use(this.usuarioPath, require('../routes/usuarios'))
        this.app.use(this.authPath, require('../routes/auth'))
    }
    async dbConectar(){
        await dbConnection()
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}
module.exports= server