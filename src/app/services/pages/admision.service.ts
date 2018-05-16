import { Injectable } from '@angular/core';
import { Admision } from '../../models/admision';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AdmisionService {
    
    admisionList: AngularFireList<any>;
    selectedAdmision: Admision = new Admision();
    
    constructor(private firebase: AngularFireDatabase) {
    }

    getAdmision()
    {
        return this.admisionList = this.firebase.list('admision');
    }

    insertAdmision(admision: Admision) {
        this.admisionList.push({
            valor_basico: admision.valor_basico,
            valor_bachiller: admision.valor_bachiller,
            requisitos: admision.requisitos
        });
    }

    updateAdmision(admision: Admision) {
        this.admisionList.update(admision.$key, {
            valor_basico: admision.valor_basico,
            valor_bachiller: admision.valor_bachiller,
            requisitos: admision.requisitos
        });
    }

    deleteAdmision($key: string) {
        this.admisionList.remove($key);
    }
}