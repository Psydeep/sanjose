import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styles: []
})
export class BreadcrumpComponent implements OnInit {

  page: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) { 
    
    this.getDataRoute()
      .subscribe( data => {
        this.page = data.titulo;
        this.title.setTitle(this.page);
        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.page
        }
        this.meta.updateTag(metaTag);
      });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events
      .filter( event => event instanceof ActivationEnd )
      .filter( (event:ActivationEnd) => event.snapshot.firstChild === null )
      .map( (event:ActivationEnd) => event.snapshot.data );
  }

}
