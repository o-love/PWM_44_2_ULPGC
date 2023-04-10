import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit{
  title = "About";
  paragraphs : string[] | any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../../assets/json/aboutUs.json').subscribe((data: any) => {
      this.paragraphs = data.paragraphs;
    });
  }
}
