import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Noticia } from '../../interfaces/noticias.interface';
import { NoticiasService, AuthService } from '../../services/service.index';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styles: []
})
export class DetalleNoticiaComponent implements OnInit {

  idnoticia: string;
  idUserLogado: string;
  isAdmin: boolean = false;
  // public isLogin: boolean;

  noticia: Noticia = {
    id: '',
    titulo: '',
    descripcion: '',
    img_portada: '',
    fecha: '',
    userId: ''
  };

  loading: boolean = true;
  public isLogin: boolean;

  constructor(
    private noticiaService: NoticiasService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.onCheckUser();
    this.getDetallesNoticia();
  }

  onCheckUser() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  getDetallesNoticia() {
    this.idnoticia = this.route.snapshot.params['id'];
    this.noticiaService.getOneNoticia(this.idnoticia)
      .subscribe(noticia => this.noticia = noticia );
      this.loading = false;
  }

  onClickDelete() {
      this.noticiaService.deleteNoticia(this.noticia);
      this.router.navigate(['/home']);
  }

}
