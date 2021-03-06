import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    //{ path: '**', component: PagenofoundComponent },
    {path: '404', component: PagenofoundComponent},
    {path: '**', redirectTo: '404'}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
