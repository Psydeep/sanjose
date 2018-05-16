import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { BreadcrumpComponent } from './breadcrump/breadcrump.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

// pipes

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        CarouselModule.forRoot(),
        PipesModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumpComponent,
        JumbotronComponent,
        PagenofoundComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumpComponent,
        JumbotronComponent,
        PagenofoundComponent,
        FooterComponent
    ]
})

export class SharedModule { }
