const {Schema, model}=require('mongoose')

const VentaSchema = Schema(
    {
      Factura: {
        type: String,
        unique: true,
        required: [true, 'La factura es obligatoria']
      },
        Cliente:{
            type: String,
            required: [true, 'El cliente es obligatorio']
        },
        Producto:{
        type: String,
        required: [true, 'El producto es obligatorio']
        },
      Subtotal: {
        type: Number,
        required: [true, 'El subtotal es obligatorio'],
        min: [1, 'El subtotal debe ser mayor a 0']
      },
      IVA: {
        type: Number,
        required: [true, 'El IVA es obligatorio'],
      },
      Total: {
        type: Number,
        min: [1, 'El total debe ser mayor a 0']
      }
    }
  );
  
  VentaSchema.pre('save', function (next) {
    const ivaDecimal = this.IVA / 100; // Convertir el valor del IVA a decimal (dividido por 100)
    this.Total = this.Subtotal + (this.Subtotal * ivaDecimal); // Sumar el Subtotal y la cantidad del IVA al Subtotal
    next();
  });
  
module.exports=model('Venta', VentaSchema)  
