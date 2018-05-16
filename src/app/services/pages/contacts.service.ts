import { Injectable } from '@angular/core';
import { Contacts } from '../../interfaces/contacts.interface';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class ContactsService {

    contactsList: AngularFireList<any>;
    selectedContacts: Contacts = new Contacts();

    constructor( private firebase: AngularFireDatabase){
    }

    getContacts(){
        return this.contactsList = this.firebase.list('contacts');
    }

    nuevoContact( contact: Contacts ) {
        this.contactsList.push({
            email: contact.email,
            direccion: contact.direccion,
            telefonos: contact.telefonos
        });
    }

    actualizarContact(contact: Contacts) {
        this.contactsList.update(contact.$key, {
            email: contact.email,
            direccion: contact.direccion,
            telefonos: contact.telefonos
        });
    }

    borrarContact($key:string){
        this.contactsList.remove($key);
    }
}