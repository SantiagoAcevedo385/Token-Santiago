const {response}=require('express')
const Pedido= require('../models/pedido')

const getPedido = async (req, res = response) => {
    try {
      const pedidos = await Pedido.find();
      mensaje=pedidos

    } catch (error) {
      mensaje= error
    }
    res.json({
            pedidos: mensaje
        })
  }

  const postPedido=async(req, res=response)=>{
    const body= req.body
    let mensaje=''
    const pedido=new Pedido(body)
    console.log(body)
    try {
        await pedido.save()
        mensaje='Pedido registrado'
    } catch (error) {
        mensaje=error
        
    }
    res.json({
        mensaje
    })
}
const putPedido=async(req, res=response)=>{
    const body= req.body
    let mensaje=''
    try {
        const monto = parseFloat(body.Monto);
      const cantidad = parseFloat(body.Cantidad);
      const total = cantidad*monto;
        await Pedido.findOneAndUpdate({_id:body._id}, {Nit:body.Nit, Proveedor:body.Proveedor, Producto:body.Producto, Cantidad: cantidad, Monto: monto, Total:total, Fecha:body.Fecha, Factura:body.Factura, Estado:body.Estado})
        mensaje='Pedido Actualizado'
    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
  }

const deletePedido=async(req, res=response)=>{
    const body= req.body
    let mensaje=''
    try {
        await Pedido.findOneAndDelete({_id:body._id}, {Nit:body.Nit, Proveedor:body.Proveedor, Producto:body.Producto, Cantidad: body.Cantidad, Monto: body.Monto, Total:body.Total, Fecha:body.Fecha, Factura:body.Factura, Estado:body.Estado})
        mensaje='Pedido Eliminado'
    } catch (error) {
        mensaje=error
        
    }
    res.json({
        mensaje
    })
}
module.exports={
    getPedido,
    postPedido,
    putPedido,
    deletePedido
}
