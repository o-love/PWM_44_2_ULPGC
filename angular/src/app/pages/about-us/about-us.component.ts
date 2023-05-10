import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass'],
  host: {
    id: "mainContent",
    class: "flex-grow-1 d-sm-flex justify-content-sm-center hideOnMobile"
  }
})
export class AboutUsComponent implements OnInit{
  paragraphs : string[] | any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../../assets/json/aboutUs.json').subscribe((data: any) => {
      this.paragraphs = data.paragraphs;
    });
  }
}
