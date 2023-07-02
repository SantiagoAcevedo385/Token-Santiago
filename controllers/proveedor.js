const {response} =require('express')
const Proveedor =require('../models/proveedor')

const getProveedor=async(req, res=response) => {
    let mensaje=''
    try {
        const proveedores= await Proveedor.find()
        mensaje= proveedores
    } catch (error) {
        mensaje= error
        
    }
    res.json({
       proveedores: mensaje
    })
}
const postProveedores=async(req, res=response)=>{
    const body= req.body
    let mensaje=''
    const proveedor=new Proveedor(body)
    console.log(body)
    try {
        await proveedor.save()
        mensaje='Proveedor registrado'
    } catch (error) {
        mensaje=error
        
    }
    res.json({
        mensaje
    })
}
const putProveedor=async(req, res=response)=>{
    const body= req.body

    let mensaje=''
    try {
    await Proveedor.findOneAndUpdate({_id:body._id}, {Nit:body.Nit,Nombre: body.Nombre, Cantidad: body.Cantidad, Telefono: body.Telefono, Factura: body.Factura, Fecha: body.Fecha, Estado: body.Estado})
        mensaje='Proveedor Actualizado'

    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
const deleteProveedor=async(req, res=response)=>{
    const body= req.body

    let mensaje=''
    try {
        await Proveedor.findOneAndDelete({_id:body._id}, {Nit:body.Nit,Nombre: body.Nombre, Cantidad: body.Cantidad, Telefono: body.Telefono, Factura: body.Factura, Fecha: body.Fecha, Estado: body.Estado})
        mensaje='Proveedor Borrado'

    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
module.exports={
    getProveedor,
    postProveedores,
    putProveedor,
    deleteProveedor

}
