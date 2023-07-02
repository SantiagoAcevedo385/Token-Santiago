const {Schema, model}= require('mongoose')

const ClienteSchema=Schema({
    Nombre: {
        type: String,
        required:[true, "el nombre es obligatorio"]
    },
    Apellido:{
        type:String,
        required:[true, 'el documento es obligatorio']
    },
    Documento:{
        type:Number,
        unique: true,
        required:[true, 'el documento es obligatorio']
    },
    Email:{
        type:String,
        required:[true, 'el nombre es obligatorio']

    },
    Telefono:{
        type:Number,
        required:[true, 'El telefono es obligatorio']
    },
    Direccion:{
        type:String,
        required:[true, 'La direccion es obligatorio']
    },
    Estado:{
        type:String,
        enum:['Activo', 'Inactivo'],
        required:[true, 'El estado es obligatorio']
    }

})
module.exports=model('Cliente', ClienteSchema)