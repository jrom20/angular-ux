import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ClaseService } from './shared/index';

@Component({
    templateUrl: './create-clase.component.html',
    styles: [`
      em {float:right; color:#E05C65; padding-left: 10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color:#999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateClaseComponent
{
    isFormDirty:boolean = true

    constructor(private router: Router, private claseserv: ClaseService) {

    }

    saveClase(formvalue){
        console.log(formvalue);
    }

    fnGoBack()
    {
        this.router.navigate(['/clases'])
    }
}