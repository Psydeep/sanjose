import { Admision } from '../../models/admision';
import { Component, OnInit } from '@angular/core';
import { AdmisionService, AuthService } from '../../services/service.index';


@Component({
  selector: 'app-admision',
  templateUrl: './admision.component.html',
  styles: []
})
export class AdmisionComponent implements OnInit {
  admisionList: Admision[];
  loading: boolean = true;
  public isLogin: boolean;

  constructor(
    private admisionService: AdmisionService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.onCheckUser();
    return this.admisionService.getAdmision()
      .snapshotChanges().subscribe(item => {
        this.admisionList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.admisionList.push(x as Admision);
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

  onEdit(admision: Admision) {
    this.admisionService.selectedAdmision = Object.assign({}, admision);
  }

  onDelete($key: string) {
    this.admisionService.deleteAdmision($key);
  }

}
