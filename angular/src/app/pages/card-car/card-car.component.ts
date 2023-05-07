import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CarService} from "../../services/car/car.service";
import {CarModel} from "../../models/Car/car.model";

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.sass']
})
export class CardCarComponent implements OnInit {

  title = "cars";
  cars: CarModel[] = [];

  constructor(private carService: CarService, private router: Router) {

  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((serviceCars: any) => {
      serviceCars.then((cars: any) => {
        this.cars = [...this.cars, ...cars];
      })
    });
  }

  navigateToCarDetails(car: any): void {
    this.router.navigate(['formCar', {carId: car.id}]); // TODO: Navigate to car page
  }

  navigateToCarCreate(): void {
    this.router.navigate(['formCar']);
  }
}
