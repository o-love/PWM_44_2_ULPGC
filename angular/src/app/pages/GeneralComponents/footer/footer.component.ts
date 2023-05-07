import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  host:{
    class:"mt-auto d-none d-lg-block"
  }
})
export class FooterComponent {
  photo: string = "https://firebasestorage.googleapis.com/v0/b/pwm2023-fba58.appspot.com/o/assets%2FCaptura%20de%20pantalla%202023-05-07%20a%20las%2020.59.44.png?alt=media&token=92c847c3-db97-4ba6-aa80-3f7033733481";

}
