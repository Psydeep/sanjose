import { Directive, HostListener, HostBinding, Output, EventEmitter, Input } from '@angular/core';
import { Gallery } from '../models/gallery';

@Directive({
    selector: '[dropZone]'
})
export class DropZoneDirective {
    @Input() files: Gallery[]=[];
    @Output() hovered : EventEmitter<boolean> = new EventEmitter();

    constructor() {}

    @HostListener('drop', ['$event'])
    public onDrop(event:any) {
        const trasferred = this._getTransferencia(event);
        if(!trasferred){
            return;
        }
        this._extraerArchivos(trasferred.files);
        this._prevenirDetener(event);
        this.hovered.emit(false);
    }

    @HostListener('dragover', ['$event'])
    public onDragOver(event:any) {
        this.hovered.emit(true);
        this._prevenirDetener(event);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(event:any) {
        this.hovered.emit(false);
    }

    private _prevenirDetener(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    private _getTransferencia( event: any ) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }

    private _extraerArchivos( fileList: FileList ) {
        console.log(fileList);
    
        // tslint:disable-next-line:forin
        for ( const property in Object.getOwnPropertyNames( fileList )) {
          const fileTemporal = fileList[property];
    
          if (this._archivoPuedeSerCargado( fileTemporal )) {
            const newFile = new Gallery( fileTemporal );
            this.files.push( newFile );
          }
        }
    
        console.log(this.files);
      }
    
      // validaciones

    private _archivoPuedeSerCargado( file: File ): boolean {
        if ( !this._archivoYaFueDroppeado( file.name ) && this._esImagen( file.type ) ) {
          return true;
        }else {
          return false;
        }
    }

    private _archivoYaFueDroppeado( name: string ): boolean {
        for ( const file of this.files ) {
          if ( file.name === name ) {
            console.log('El archivo ' + name + ' ya fue agregado');
            return true;
          }
        }
        return false;
      }
    
      private _esImagen( typeFile: string ): boolean {
        return ( typeFile === '' || typeFile === undefined ) ? false : typeFile.startsWith('image');
      }
}