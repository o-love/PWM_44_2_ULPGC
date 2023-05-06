import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    this.carService.getCars().subscribe((serviceCars: CarModel[]) => {
      this.cars = [...this.cars, ...serviceCars];
    });
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((serviceCars: CarModel[]) => {
      this.cars = [...this.cars, ...serviceCars];
    });
  }

  navigateToCarDetails(car: any): void {
    this.router.navigate(['aboutUs'], car.id);
  }

  navigateToCarCreate(): void {
    this.router.navigate(['formCar']);
  }
}
