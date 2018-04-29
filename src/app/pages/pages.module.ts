import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ColegioComponent } from './colegio/colegio.component';
import { AdmisionComponent } from './admision/admision.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ContactsComponent,
        EspecialidadesComponent,
        ColegioComponent,
        AdmisionComponent,
        NoticiasComponent
    ],
    exports: [
        HomeComponent,
        ContactsComponent,
        EspecialidadesComponent,
        ColegioComponent,
        AdmisionComponent,
        NoticiasComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }
