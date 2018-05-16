import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/service.index';
import { Gallery } from '../../models/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

  itsOnElement = false;
  files: Gallery[] = [];

  constructor(private _galleryService: GalleryService) { }

  ngOnInit() {
  }

  uploadImages() {
    this._galleryService.pushGallery(this.files);
  }

  cleanImages() {
    this.files = [];
  } 
}
