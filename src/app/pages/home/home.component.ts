import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/service.index';
import { Noticia } from '../../interfaces/noticias.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  noticias: Noticia[]=[];

  constructor(
    private noticiasService: NoticiasService
  ) { }

  ngOnInit() {
    this.allNoticias();
  }

  allNoticias() {
    this.noticiasService.getAllNoticias()
      .subscribe(noticias => this.noticias = noticias);
      this.loading = false;
  }

}
