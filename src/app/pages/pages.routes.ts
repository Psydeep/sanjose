
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdmisionComponent } from './admision/admision.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColegioComponent } from './colegio/colegio.component';
import { NuevaNoticiaComponent } from './noticias/nueva-noticia.component';
import { EditarNoticiaComponent } from './noticias/editar-noticia.component';
import { DetalleNoticiaComponent } from './noticias/detalle-noticia.component';

import { AuthGuard } from '../guards/auth.guard';
import { UpdateContactsComponent } from './contacts/update-contacts.component';
import { NewEspecialidadComponent } from './especialidades/new-especialidad.component';
import { GalleryComponent } from './gallery/gallery.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent, data: {titulo: 'Noticias'} },
            { path: 'noticias', component: NoticiasComponent, data: {titulo: 'Noticias'}  },
            { path: 'noticia/:id', component: NuevaNoticiaComponent, canActivate: [AuthGuard], data: {titulo: 'Noticia'}  },
            { path: 'noticia/editar/:id', component: EditarNoticiaComponent, canActivate: [AuthGuard], data: {titulo: 'Editar Noticia'}  },
            { path: 'noticia/detalle/:id', component: DetalleNoticiaComponent, data: {titulo: 'Detalle Noticia'}  },
            { path: 'colegio', component: ColegioComponent, data: {titulo: 'El Colegio'}  },
            { path: 'contacts', component: ContactsComponent , data: {titulo: 'Contactos'} },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {titulo: 'Dashboard'}  },
            { path: 'admision', component: AdmisionComponent , data: {titulo: 'Admisión'} },
            { path: 'especialidades', component: EspecialidadesComponent , data: {titulo: 'Nuestras Especialidades'} },
            { path: 'galeria', component: GalleryComponent, canActivate: [AuthGuard] , data: {titulo: 'Galería'} },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
