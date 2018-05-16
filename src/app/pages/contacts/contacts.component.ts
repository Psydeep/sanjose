import { Component, OnInit } from '@angular/core';
import { ContactsService, AuthService } from '../../services/service.index';
import { Contacts } from '../../interfaces/contacts.interface';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactsList: Contacts[];
  loading:boolean = true;
  public isLogin: boolean;

  constructor(private cS: ContactsService,
    private authService: AuthService
  ) {  }

  ngOnInit() {
    this.onCheckUser();
    return this.cS.getContacts()
      .snapshotChanges().subscribe(item => {
        this.contactsList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.contactsList.push(x as Contacts);
        });
        this.loading = false;
      });
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

  onEdit(contacts: Contacts) {
    this.cS.selectedContacts = Object.assign({}, contacts);
  }

  onDelete($key: string) {
    this.cS.borrarContact($key);
  }
}

