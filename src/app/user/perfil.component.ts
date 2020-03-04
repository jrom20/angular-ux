import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './Perfil.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class PerfilComponent implements OnInit{
  
  firstName:FormControl
  lastName:FormControl
  perfilForm: FormGroup

  constructor(public auth:AuthService, private router: Router) {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
  }

  ngOnInit()
  {
      this.perfilForm = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName
      });
  }


  NoValidateFirstName(){
    return this.firstName.invalid && this.firstName.touched;
  }

  fnUpdate(formvalue){
    if(this.perfilForm.valid){
      this.auth.ActualizarUsuari(formvalue.firstName, formvalue.lastName);
      this.router.navigate(['clases']);
    }
  }
}