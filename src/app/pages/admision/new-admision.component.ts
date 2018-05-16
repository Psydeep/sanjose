import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdmisionService, AuthService } from '../../services/service.index';
import { Admision } from '../../models/admision';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-admision',
  templateUrl: './new-admision.component.html',
  styles: []
})
export class NewAdmisionComponent implements OnInit {

  public isLogin: boolean;

  constructor(
    public admisionService: AdmisionService,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.onCheckUser();
    this.admisionService.getAdmision();
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

  onSend(admisionForm: NgForm) {
    // if(admisionForm.value.$key == null)
    //   this.admisionService.insertAdmision(admisionForm.value);
    // else
    this.admisionService.updateAdmision(admisionForm.value);
    this.toastr.success('Actualización realizada','Datos de admisión');
    
    // this.resetForm(admisionForm);
  }

  resetForm(admisionForm?: NgForm) {
    if(admisionForm != null)
      admisionForm.reset();
      this.admisionService.selectedAdmision = new Admision();
  }

}
