const {Schema, model}=require('mongoose')

const ProveedorSchema=Schema({
    Nit: {
        type: Number,
        unique:true,
        required:[true, 'El nit es obligatorio']
    },
    Nombre:{
        type: String,
        unique:true,
        required: [true, 'El Nombre es obligatorio']
    },

    Telefono: {
        type: Number,
        required: [true, 'El numero es obligatorio']
    },
    Factura:{
        unique: true,
        type:String,
        required: [true, 'La factura es obligatoria']
    },
    Cantidad: {
        type: Number,
        required: [true,'La cantidad es obligatoria'],

        validate: {
            validator: function(cantidad){
                return cantidad>=0
            },
            message: 'La cantidad debe ser mayor a 0'

        }
    },
    Fecha:{
        type:Date,
        required: [true, 'La fecha es obligatoria'],
    },
    Estado:{
        type:String,
        enum:['Activo', 'Inactivo'],
        required: [true, 'El estado es obligatorio']
    }
})
module.exports=model('Proveedor', ProveedorSchema)
