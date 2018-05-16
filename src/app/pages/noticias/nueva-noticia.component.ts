import { Component, OnInit } from '@angular/core';
import { Noticia, ItemArchivo } from '../../interfaces/noticias.interface';
import { AuthService, NoticiasService } from '../../services/service.index';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nueva-noticia',
  templateUrl: './nueva-noticia.component.html',
  styles: []
})
export class NuevaNoticiaComponent implements OnInit {
  noticia: Noticia = {
    id: '',
    titulo: '',
    descripcion: '',
    img_portada: '',
    fecha: '',
    userId: ''
  };
  img: ItemArchivo;

  localUrl: any[];

  constructor(
    private authService: AuthService,
    private noticiaService: NoticiasService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSaveNoticia({value}: {value: Noticia}, imagen?: any) {
    let fle: File;
    for (const selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      fle = selectedFile;
    }
    imagen = fle;
    value.fecha = (new Date()).getTime();
    this.authService.getAuth()
      .subscribe( user => {
        value.userId = user.uid;
          this.noticiaService.addNewNoticia(value, imagen);
      });
      this.router.navigate(['/home']);
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
