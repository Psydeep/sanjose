export class Gallery {
    file:File;
    name:string;
    url:string;
    progress:number;
    itsUpload:boolean;

    createdAt: any;

    constructor(file:File) {
        this.file = file;
        this.name = name;
        this.itsUpload = false;
        this.progress = 0;
    }
}