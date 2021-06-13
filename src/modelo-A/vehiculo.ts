import { HojaRuta } from "./hojaRuta";

export class Vehiculo {
    patente : string;
    modelo : string;
    marca: string; 
    hojasRutas: HojaRuta[] = [];

    constructor(patente:string, modelo:string, marca:string){
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }

    /* 2- Codifique en la clase Vehiculo una función denominada 
    “calcularTotalKilometrosRecorridos (Date fechaDesde, Date fechaHasta)” 
    que retorne el total de kilómetros recorridos por el vehículo para un 
    rango de fechas determinado. Reutilice el método del punto anterior. */
    
    calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date): number{
        let kmTotalRecorridos : number = 0;
        if (this.hojasRutas != null) {
            this.hojasRutas.forEach(hojaRuta => {
                if (hojaRuta.fecha >= fechaDesde && hojaRuta.fecha <= fechaHasta) {
                    kmTotalRecorridos += hojaRuta.calcularTotalKilometros();
                }
            })
        }
        return kmTotalRecorridos;
    }
}