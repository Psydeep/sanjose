import { NgModule } from '@angular/core';

import { BreadcrumpComponent } from './breadcrump/breadcrump.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumpComponent,
        JumbotronComponent,
        PagenofoundComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumpComponent,
        JumbotronComponent,
        PagenofoundComponent
    ]
})

export class SharedModule { }
