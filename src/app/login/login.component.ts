import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/service.index';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  emailform = new FormControl('', [Validators.required, Validators.email]);
  passform = new FormControl('', [Validators.required, Validators.requiredTrue]);
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.email, this.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logeado correctamente.',
    {cssClas: 'alert-success', timeout: 4000});
      this.router.navigate(['/home']);
    }).catch((err) => {
      this.flashMensaje.show('Usuario o contraseña incorrectos.',
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }

    
  
    getErrorMessage() {
      return this.emailform.hasError('required') ? 'Debe ingresar una dirección de correo' :
          this.emailform.hasError('email') ? 'No es una dirección de correo' :
              '';

    }
    getErrorMessage2() {
      return this.passform.hasError('required') ? 'Debe ingresar una contraseña' :
      this.passform.hasError('password') ? 'Contraseña incorrecta' :
          '';
    }

}
