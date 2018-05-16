import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  AuthService,
  NoticiasService,
  SharedService,
  SidebarService,
  ContactsService,
  EspecialidadService,
  AdmisionService,
  GalleryService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    NoticiasService,
    SharedService,
    SidebarService,
    ContactsService,
    EspecialidadService,
    AdmisionService,
    GalleryService
  ],
  declarations: []
})
export class ServiceModule { }
