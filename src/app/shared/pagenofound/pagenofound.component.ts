import { Component, OnInit } from '@angular/core';

// declare function  init_plugins();

@Component({
  selector: 'app-pagenofound',
  templateUrl: './pagenofound.component.html',
  styles: []
})
export class PagenofoundComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
    // init_plugins();
  }

}
