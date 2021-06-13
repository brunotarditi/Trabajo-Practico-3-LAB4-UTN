import { Articulo } from "./articulo";
import { Factura } from "./factura";

export class DetalleFactura {
    cantidad: number;
    subtotal: number;
    factura: Factura;
    articulo: Articulo;

    constructor(cantidad: number, subtotal: number, factura: Factura, articulo: Articulo){
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.factura = factura;
        this.articulo = articulo;
    }
    
    /*1- Codifique en la clase DetalleFactura una función llamada calcularSubTotal() 
    que asigne a la variable subtotal el monto resultante de la cantidad de artículos 
    vendidos por el precio de cada artículo.*/
    
    calcularSubTotal(){
        return this.subtotal = this.cantidad * this.articulo.precio; 
    }

}