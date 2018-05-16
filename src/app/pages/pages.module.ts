import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UpdateContactsComponent } from './contacts/update-contacts.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { NewEspecialidadComponent } from './especialidades/new-especialidad.component';
import { ColegioComponent } from './colegio/colegio.component';
import { AdmisionComponent } from './admision/admision.component';
import { NewAdmisionComponent } from './admision/new-admision.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NuevaNoticiaComponent } from './noticias/nueva-noticia.component';


import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarNoticiaComponent } from './noticias/editar-noticia.component';
import { DetalleNoticiaComponent } from './noticias/detalle-noticia.component';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { NgxPaginationModule } from 'ngx-pagination';

// flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { FlashMessage } from 'angular2-flash-messages/module/flash-message';
import { GalleryComponent } from './gallery/gallery.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { DropZoneDirective } from '../directives/file-drop.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {

    NoticiasService,
    } from '../services/service.index';
import { ShowImgComponent } from './show-img/show-img.component';

// pipes

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ContactsComponent,
        EspecialidadesComponent,
        NewEspecialidadComponent,
        ColegioComponent,
        AdmisionComponent,
        NewAdmisionComponent,
        NoticiasComponent,
        NuevaNoticiaComponent,
        DashboardComponent,
        EditarNoticiaComponent,
        DetalleNoticiaComponent,
        UpdateContactsComponent,
        GalleryComponent,
        ShowImgComponent,
        DropZoneDirective
        
    ],
    exports: [
        HomeComponent,
        ContactsComponent,
        UpdateContactsComponent,
        EspecialidadesComponent,
        ColegioComponent,
        DashboardComponent,
        AdmisionComponent,
        NoticiasComponent,
        NuevaNoticiaComponent,
        EditarNoticiaComponent,
        DetalleNoticiaComponent,
        AdmisionComponent,
        NewAdmisionComponent,
        NewEspecialidadComponent,
        GalleryComponent
        
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        HttpModule,
        HttpClientModule,
        NgxPaginationModule,
        FlashMessagesModule,
        MatFormFieldModule,
        MatInputModule,
        PipesModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
    ]
})

export class PagesModule { }
