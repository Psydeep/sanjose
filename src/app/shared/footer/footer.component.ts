import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerpage',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
