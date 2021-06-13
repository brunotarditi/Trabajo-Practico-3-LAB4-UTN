import { Detalle } from "../modelo-A/detalle";
import { HojaRuta } from "../modelo-A/hojaRuta";
import { Vehiculo } from "../modelo-A/vehiculo";
export class TestA {
  mostrar() {
    let vehiculo = new Vehiculo("ABC456", "Audi", "A3");
    let hojaRuta1 = new HojaRuta(new Date("2019-01-16"), 20, vehiculo);
    let hojaRuta2 = new HojaRuta(new Date("2016-05-20"), 15, vehiculo);
    let hojaRuta3 = new HojaRuta(new Date("2017-06-8"), 6, vehiculo);
    let detalle1 = new Detalle(1000, 2000, 10, 12, 10, 40, hojaRuta1);
    let detalle2 = new Detalle(2000, 2750, 5, 9, 2, 20, hojaRuta2);
    let detalle3 = new Detalle(500, 1000, 13, 18, 50, 51, hojaRuta3);
    
    vehiculo.hojasRutas.push(hojaRuta1);
    vehiculo.hojasRutas.push(hojaRuta2);
    vehiculo.hojasRutas.push(hojaRuta3);
    
    hojaRuta1.detalles.push(detalle1);
    hojaRuta1.detalles.push(detalle2);
    hojaRuta1.detalles.push(detalle3);
    hojaRuta2.detalles.push(detalle1);
    hojaRuta3.detalles.push(detalle3);
    
    const totalKm = document.getElementById("totalKm");
    if (totalKm == null) {
      alert("oops");
    } else {
      totalKm.innerHTML =
        "El total de kilometros de la hoja de ruta es: " +
        hojaRuta1.calcularTotalKilometros().toString() + " km.";
    }
    const totalKmRecorridos = document.getElementById("totalKmRecorridos");
    if (totalKmRecorridos == null) {
      alert("oops");
    } else {
      totalKmRecorridos.innerHTML =
        "El total de kilometros recorridos por el vehículo: " +
        vehiculo.calcularTotalKilometrosRecorridos(new Date("2016-06-8"), new Date("2020-01-15")).toString() + " km.";
    }
  }
}
