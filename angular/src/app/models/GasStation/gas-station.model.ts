import {GasPrice} from "./gas-price.model";

export interface GasStation {
  zip: number;
  address: string;
  business_hours: string;
  latitude: number;
  locality: string;
  longitude: number;
  margin: string;
  municipality: string;
  province: string;
  remission: string;
  name: string;
  sale_type: string;
  bio_ethanol_percentage: string;
  methyl_ester_percentage: string;
  IDEESS: string;
  municipality_id: string;
  province_id: string;
  IDCCAA: string;
  gasPrices: GasPrice[];
}
