import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service'

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

  constructor(public auth:AuthService) {
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
      console.log(formvalue.firstName, formvalue.lastName);
    }
  }
}