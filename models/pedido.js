const {Schema, model}=require('mongoose')

const PedidoSchema=Schema({
    Nit:{
        type:Number,
        unique:true,
        required:[true, "el nit es obligatorio"]
    },
    Proveedor:{
        type:String,
        required:[true, "el proveedor es obligatorio"]
    },
    Cantidad:{
        type:Number,
        required:[true, "la cantidad es obligatoria"]
    },
    Fecha:{
        type:Date,
        default: new Date()
    },
    Factura:{
        type:String,
        required:[true, "el factura es obligatorio"]
    },
        Telefono:{
        type:Number,
        required:[true, "el telefono es obligatorio"]
    },
     Categoria:{
        type:String,
        enum:['Molido', 'Grano'],
        required:[true, 'La categoria es obligatoria']
    },
    Estado:{
        type:String,
        enum:['Activo', 'Inactivo'],
        required:[true, 'El estado es obligatorio']
    }
});
module.exports = model('Pedido',PedidoSchema)
