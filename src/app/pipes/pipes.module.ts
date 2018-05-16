import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from './fileSize.pipe';
import { KeysPipe } from './keys.pipe';
import { OrderByPipe } from './orderby.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FileSizePipe,
        KeysPipe,
        OrderByPipe
    ],
    exports: [
        FileSizePipe,
        KeysPipe,
        OrderByPipe
    ]
})
export class PipesModule {
    
}