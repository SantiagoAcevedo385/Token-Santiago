const {response}=require('express')
const Venta=require('../models/venta')

const getVenta=async(req, res=response)=>{
    try {
        const ventas=await Venta.find()
        mensaje=ventas

    } catch (error) {
        mensaje=error

    }
    res.json({
        ventas: mensaje
    })
}

const postVenta=async(req, res=response)=>{
    const body = req.body
    let mensaje=''
    const venta=new Venta(body)
    console.log(body)
    try {
        await venta.save()
        mensaje='Venta registrada'
        
    } catch (error) {
        mensaje=error
        
    }
    res.json({
        mensaje
    })
}
const putVenta = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';
  
    try {
      const subtotal = parseFloat(body.Subtotal);
      const iva = parseFloat(body.IVA);
      const total = subtotal + (subtotal * (iva / 100));
  
      await Venta.findOneAndUpdate(
        { _id: body._id },
        { Factura: body.Factura, Cliente: body.Cliente, Producto: body.Producto, Subtotal: subtotal, IVA: iva, Total: total }
      );
  
      mensaje = 'Venta actualizada correctamente';
    } catch (error) {
      mensaje = 'Error al actualizar la venta';
    }
  
    res.json({ mensaje });
  };
  
const deleteVenta= async(req, res=response)=>{
    const body=req.body
    let mensaje=''
    try {
        await Venta.findOneAndDelete({_id:body._id}, {Factura:body.Factura, Cliente: body.Cliente, Producto: body.Producto, Subtotal:body.Subtotal, IVA:body.IVA})
        mensaje='Venta eliminada'
        
    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
            mensaje
         })
}
module.exports={
    getVenta,
    postVenta,
    putVenta,
    deleteVenta
}
