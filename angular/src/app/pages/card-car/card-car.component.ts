import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.sass']
})
export class CardCarComponent implements OnInit{
  title = "cars";
  cars : string[] | any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('../../assets/json/cars.json').subscribe((data: any) => {
      this.cars = data.cars;
    });
  }
}
