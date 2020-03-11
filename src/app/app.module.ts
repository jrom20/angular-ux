import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { 
  ClasesListaComponent,
  ClaseThumbnailComponent,
  ClaseDetailsComponent,
  ClaseService,
  CreateClaseComponent,
  ClaseRouteActivator,
  ClaseListaResolver,
  CreateSeccionComponent,
  SeccionListComponent
} from './clases/index'


import { ClasesAppComponent } from './clases-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service'
import { AppRoutes } from "./routes";;
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    ClasesAppComponent,
    ClasesListaComponent,
    ClaseThumbnailComponent,
    NavBarComponent,
    ClaseDetailsComponent,
    CreateClaseComponent,
    Error404Component,
    CreateSeccionComponent,
    SeccionListComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClaseService,
    ToastrService, 
    ClaseRouteActivator,
    ClaseListaResolver,
    { provide: 'canDeactivateCrearClase', useValue: CheckFormStatus},
    AuthService
  ],
  bootstrap: [ClasesAppComponent]
})
export class AppModule { }

export function CheckFormStatus(component:CreateClaseComponent)
{
  if(component.isFormDirty)
    return window.confirm('Esta seguro que desea avandonar la pantalla sin guardar los cambios antes?')
  else
    return true;
}