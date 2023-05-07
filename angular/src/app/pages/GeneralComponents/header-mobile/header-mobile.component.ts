import { Component } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.sass'],
  host:{
    id:"headerMobile",
    class:"p-2",
    style:"background-color: #0065A3;"
  }
})
export class HeaderMobileComponent {

  toggleHeader() {
    const h = document.getElementById("headerPadre")
    const c = document.getElementById("mainContent")

    if (h !==null && c!==null){
      h.classList.toggle("hideOnMobile")
      c.classList.toggle("hideOnMobile")
    }

  }
}
