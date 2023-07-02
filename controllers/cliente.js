const {response} =require('express')
const Cliente =require('../models/cliente')


const getCliente = async (req, res = response) => {
    try {
      const clientes = await Cliente.find();
      mensaje=clientes

    } catch (error) {
      mensaje= error
    }
    res.json({
            clientes: mensaje
        })
  }
  
const postCliente=async(req, res=response)=>{
    const body= req.body
    let mensaje=''
    const cliente=new Cliente(body)
    console.log(body)
    try {
        await cliente.save()
        mensaje='Cliente registrado'
    } catch (error) {
        mensaje=error
        
    }
    res.json({
        mensaje
    })
}
const putCliente=async(req, res=response)=>{
  const body= req.body
  let mensaje=''
  try {
      await Cliente.findOneAndUpdate({_id:body._id}, {Nombre:body.Nombre, Apellido:body.Apellido, Documento:body.Documento, Email:body.Email, Telefono:body.Telefono, Direccion:body.Direccion, Estado:body.Estado})
      mensaje='Cliente Actualizado'
  } catch (error) {
      mensaje='Error'
      
  }
  res.json({
      mensaje
  })
}
const deleteCliente=async(req, res=response)=>{
  const body= req.body
  let mensaje=''
  try {
      await Cliente.findOneAndDelete({_id:body._id}, {Nombre:body.Nombre, Apellido:body.Apellido, Documento:body.Documento, Email:body.Email, Telefono:body.Telefono, Direccion:body.Direccion, Estado:body.Estado})
      mensaje='Cliente Borrado'
  } catch (error) {
      mensaje='Error'
      
  }
  res.json({
      mensaje
  })
}

module.exports={
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
    
}