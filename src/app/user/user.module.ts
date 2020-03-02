import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PerfilComponent } from './perfil.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'


@NgModule({
    declarations: [
        PerfilComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    providers: [
    ],
    bootstrap: []
  })
  
  export class UserModule { }