import { Component, OnInit } from '@angular/core';
import { Especialidades } from '../../interfaces/especialidades.interface';
import { AuthService, EspecialidadService } from '../../services/service.index';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-especialidad',
  templateUrl: './new-especialidad.component.html',
  styles: []
})
export class NewEspecialidadComponent implements OnInit {

  public isLogin: boolean;

  constructor(
    private authService: AuthService,
    public _especialidadService: EspecialidadService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.onCheckUser();
    this._especialidadService.getEspecialidades();
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

  onSend(especialidadForm: NgForm) {
    if(especialidadForm.value.$key == null) {
      this._especialidadService.insertEspecialidad(especialidadForm.value);
      this.toastr.success('Creación Realizada', 'Nueva especialidad');
      this.resetForm(especialidadForm);
    } else {
      this._especialidadService.updateEspecialidad(especialidadForm.value);
      this.toastr.success('Actualización realizada','Información de especialidad');
      this.resetForm(especialidadForm);
    }
  }

  resetForm(especialidadForm?:NgForm) {
    if(especialidadForm != null) {
      especialidadForm.reset();
      this._especialidadService.selectedEspecialidades = new Especialidades();
    }
  }
}
