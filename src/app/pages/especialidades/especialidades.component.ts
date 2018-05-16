import { Component, OnInit } from '@angular/core';
import { EspecialidadService, AuthService } from '../../services/service.index';
import { Especialidades } from '../../interfaces/especialidades.interface';


@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styles: []
})
export class EspecialidadesComponent implements OnInit {
  especialidadesList: Especialidades[];
  loading: boolean = true;
  public isLogin: boolean;

  constructor(
    private _especialidadService: EspecialidadService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.onCheckUser();
    return this._especialidadService.getEspecialidades()
      .snapshotChanges().subscribe(item => {
        this.especialidadesList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.especialidadesList.push(x as Especialidades);
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

  onEdit(especialidad: Especialidades) {
    this._especialidadService.selectedEspecialidades = Object.assign({}, especialidad);
  }

  onDelet($key:string){
    this._especialidadService.deleteEspecialidad($key);
  }

}
