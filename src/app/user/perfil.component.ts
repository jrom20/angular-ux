import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './Perfil.component.html'
})

export class PerfilComponent implements OnInit{
  
  firstName:FormControl
  lastName:FormControl
  profileForm: FormGroup

  constructor(public auth:AuthService) {
    this.firstName = new FormControl()
    this.lastName = new FormControl()
  }

  ngOnInit()
  {
      this.profileForm = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName
      });
  }

}