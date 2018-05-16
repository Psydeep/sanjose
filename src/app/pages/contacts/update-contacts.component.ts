import { Component, OnInit } from '@angular/core';
import { ContactsService, AuthService } from '../../services/service.index';
import { Contacts } from '../../interfaces/contacts.interface';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-contacts',
  templateUrl: './update-contacts.component.html',
  styles: []
})
export class UpdateContactsComponent implements OnInit {

  public isLogin: boolean;

  constructor(
    public cS: ContactsService,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.onCheckUser();
    this.cS.getContacts();
    this.resetForm();
  }

  onCheckUser() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  onSend(contactsForm: NgForm) {
    // if(contactsForm.value.$key == null)
    //   this.cS.nuevoContact(contactsForm.value);
    //   this.toastr.success('Creacion realizada', 'Información de Contactos');
    // else
    this.cS.actualizarContact(contactsForm.value);
     this.toastr.success('Actualización realizada','Información de contacto');

    //this.resetForm(contactsForm);
  }

  resetForm(contactsForm?: NgForm) {
    if(contactsForm != null) {
      contactsForm.reset();
      this.cS.selectedContacts = new Contacts();
    }
  }

}
