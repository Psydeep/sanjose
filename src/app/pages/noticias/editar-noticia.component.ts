import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Noticia, ItemArchivo } from '../../interfaces/noticias.interface';
import { NoticiasService, AuthService } from '../../services/service.index';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styles: []
})
export class EditarNoticiaComponent implements OnInit {
 idNoticia: string;
  noticia: Noticia = {
    id: '',
    titulo: '',
    descripcion: '',
    img_portada: '',
    fecha: '',
    userId: ''
  };


  localUrl: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noticiasService: NoticiasService
  ) { }

  ngOnInit() {
    this.getDetalleREceta();
   }

  getDetalleREceta() {
    this.idNoticia = this.route.snapshot.params['id'];
    this.noticiasService.getOneNoticia(this.idNoticia)
      .subscribe(noticia => this.noticia = noticia);
  }

  onUpdateNoticia({value}: {value: Noticia}, imagen?: any) {
    let fle: File;
    for (const selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      fle = selectedFile;
    }
    imagen = fle;
    value.fecha = (new Date()).getTime();
    value.id = this.idNoticia;
    this.noticiasService.updateNoticia(value, imagen);
    // this.router.navigate(['/noticia/detalle/' + this.idNoticia]);
    this.router.navigate(['/noticia/detalle/' + this.idNoticia]);
  }

    showPreviewImage(event: any) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            // tslint:disable-next-line:no-shadowed-variable
            reader.onload = (event: any) => {
                this.localUrl = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}


