import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.sass']
})
export class CardCarComponent implements OnInit{
  title = "cars";
  cars: string[] | any;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.http.get('../../assets/json/cars.json').subscribe((data: any) => {
      this.cars = data.cars;
    });
  }
  navigateToCarDetails(car: any): void {
    this.router.navigate(['aboutUs'],car.id);
  }
}
