import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/service.index';
import { Noticia } from '../../interfaces/noticias.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[];

  constructor(
    private noticiasService: NoticiasService
  ) { }

  ngOnInit() {
    this.allNoticias();
  }

  allNoticias() {
    this.noticiasService.getAllNoticias()
      .subscribe(noticias => this.noticias = noticias);
  }

}
