import { Detalle } from "./detalle";
import { Vehiculo } from "./vehiculo";

export class HojaRuta {
    fecha: Date;
    numero: number;
    vehiculo: Vehiculo;
    detalles: Detalle[] = [];
  
    constructor(fecha: Date, numero: number, vehiculo: Vehiculo) {
      this.fecha = fecha;
      this.numero = numero;
      this.vehiculo = vehiculo;
    }

    /* 1- Codifique en la clase HojaRuta una función denominada “calcularTotalKilometros()” 
      que retorne el total de kilómetros realizados para la hoja de ruta. */
  
    calcularTotalKilometros(): number {
      let kmTotal: number = 0;
      if (this.detalles != null) {
        this.detalles.forEach((detalle) => {
          kmTotal += detalle.kmRegreso - detalle.kmSalida;
        });
      }
      return kmTotal;
    }
  }