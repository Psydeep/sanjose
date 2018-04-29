import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdmisionComponent } from './admision/admision.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'noticias', component: NoticiasComponent },
            { path: 'contacts', component: ContactsComponent },
            { path: 'admision', component: AdmisionComponent },
            { path: 'especialidades', component: EspecialidadesComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
