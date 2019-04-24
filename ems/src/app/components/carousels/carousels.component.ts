import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    {image: 'assets/images/1.jpg'},
    {image: 'assets/images/2.jpg'},
    {image: 'assets/images/3.jpg'}
  ];
  showIndicator = true;
 
  switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }
}
