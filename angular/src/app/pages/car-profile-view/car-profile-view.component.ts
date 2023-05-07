import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../services/car/car.service";
import {CarModel} from "../../models/Car/car.model";

@Component({
  selector: 'app-car-profile-view',
  templateUrl: './car-profile-view.component.html',
  styleUrls: ['./car-profile-view.component.sass'],

})
export class CarProfileViewComponent {
  car: CarModel | undefined;

  constructor(private route: ActivatedRoute, private carService: CarService, private cdRef:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.carService.getCarByID(this.route.snapshot.params["carId"]).subscribe((car) => {
      this.car = <CarModel>car;
      console.log(this.car);
      this.cdRef.detectChanges();
    })
  }
}
