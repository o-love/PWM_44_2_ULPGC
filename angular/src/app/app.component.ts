import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  host:{
    class:"vh-100 d-flex flex-column "
  }
})
export class AppComponent {
  title = 'angular';
}
