import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  host:{
    id:"app"
  }
})
export class AppComponent {
  title = 'angular';
}
