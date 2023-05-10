import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GasStation} from "../../models/GasStation/gas-station.model";
import {GasPrice} from "../../models/GasStation/gas-price.model";
import {GasProvincia} from "../../models/GasStation/gas-provincia.model";
import {FirestoreService} from "../firestore/firestore.service";

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
    name: rawGasStation["Rótulo"],
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

  private collection = "gasStations"

  constructor(protected http: HttpClient, private firestoreService: FirestoreService) {
  }

  getCanaryIslandsGasStations(): Observable<GasStation[]> {
    return this.firestoreService.getAllDocs(this.collection);
  }

  getGasStationPrice(gasStation: GasStation): Observable<GasPrice[]> {
    return this.getCityGasStations(gasStation.municipality_id).pipe(map((gasStationArray: any[]) => {
      return gasStationArray.find((value) => value.IDEESS == gasStation.IDEESS).gasPrices;
    }))
  }

  private getCityGasStations(cityID: string): Observable<GasStation[]> {
    return this.http.get(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${cityID}`)
      .pipe(map((rawGasStations: any) => rawGasStations.ListaEESSPrecio.map(rawGasStationMapper)));
  }
}
