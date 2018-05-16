import { Injectable } from '@angular/core';
import { Especialidades } from '../../interfaces/especialidades.interface';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EspecialidadService {

    especialidadesList: AngularFireList<any>;
    selectedEspecialidades: Especialidades = new Especialidades();

    constructor(private firebase: AngularFireDatabase) {  }

    getEspecialidades()
    {
        return this.especialidadesList = this.firebase.list('especialidades');
    }
    
    insertEspecialidad(especialidad: Especialidades) {
        this.especialidadesList.push({
            titulo: especialidad.titulo,
            descripcion: especialidad.descripcion
        });
    }

    updateEspecialidad(especialidad: Especialidades) {
        this.especialidadesList.update(especialidad.$key, {
            titulo: especialidad.titulo,
            descripcion: especialidad.descripcion
        });
    }

    deleteEspecialidad($key: string) {
        this.especialidadesList.remove($key);
    }
}