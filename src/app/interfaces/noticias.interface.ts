export interface Noticia {
    id?: string;
    titulo?: string;
    descripcion?: string;
    img_portada?: string;
    fecha?: any;
    userId?: string;


}

export class ItemArchivo {
    public $key?: string;
    public name: string;
    public url: string;
    public archivo: File;

    public subiendo: boolean;
    public progreso: number;

    constructor ( archivo: File ) {
        this.archivo = archivo;
        this.name = archivo.name;
        this.subiendo = false;
        this.progreso = 0;
    }
}
