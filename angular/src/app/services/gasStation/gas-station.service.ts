import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GasStation} from "../../models/GasStation/gas-station.model";
import {GasPrice} from "../../models/GasStation/gas-price.model";
import {GasProvincia} from "../../models/GasStation/gas-provincia.model";

function rawGasStationMapper(rawGasStation: any): GasStation {
  let prices: GasPrice[] = [];
  Object.keys(rawGasStation).filter(key => key.startsWith("Precio")).forEach(key => {
    if (rawGasStation[key] === "") {
      return;
    }
    prices.push({gas_type: key.substring(7), price: parseFloat(rawGasStation[key].replace(',', '.'))} as GasPrice);
  });

  return {
    zip: rawGasStation["C.P."],
    address: rawGasStation["Dirección"],
    business_hours: rawGasStation["Horario"],
    latitude: parseFloat(rawGasStation["Latitud"].replace(/,/g, '.')),
    locality: rawGasStation["Localidad"],
    longitude: parseFloat(rawGasStation["Longitud (WGS84)"].replace(/,/g, '.')),
    margin: rawGasStation["Margen"],
    municipality: rawGasStation["Municipio"],
    province: rawGasStation["Provincia"],
    remission: rawGasStation["Retribución"],
    name: rawGasStation["Rotulo"],
    sale_type: rawGasStation["Tipo Venta"],
    bio_ethanol_percentage: rawGasStation["Porcentaje Bioetanol"],
    methyl_ester_percentage: rawGasStation["Porcentaje Metanol"],
    IDEESS: rawGasStation["IDEESS"],
    municipality_id: rawGasStation["IDMunicipio"],
    province_id: rawGasStation["IDProvincia"],
    IDCCAA: rawGasStation["IDCCAA"],
    gasPrices: prices
  } as GasStation;
}

@Injectable({
  providedIn: 'root'
})
export class GasStationService {

  constructor(protected http: HttpClient) {
  }

  getGasStations(): Observable<GasStation[]> {
    return this.http.get('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/')
      .pipe(map((rawGasStations: any) => rawGasStations.ListaEESSPrecio.map(rawGasStationMapper)));
  }

  getGasStationsByProvince(provinceID: number): Observable<GasStation[]> {
    return this.http.get(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroProvincia/${provinceID}`)
      .pipe(map((rawGasStations: any) => rawGasStations.ListaEESSPrecio.map(rawGasStationMapper)));
  }

  getGasStationProvincias(): Observable<GasProvincia[]> {
    return this.http.get<GasProvincia[]>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/');
  }

  getGasStationsCCAA(CCAA_id: string): Observable<GasStation[]> {
    return this.http.get(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroCCAA/${CCAA_id}`)
      .pipe(map((rawGasStations: any) => rawGasStations.ListaEESSPrecio.map(rawGasStationMapper)));
  }

  getCanaryIslandsGasStations(): Observable<GasStation[]> {
    return this.getGasStationsCCAA("05");
  }
}
