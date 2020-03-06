import { Component, OnInit } from "@angular/core";
import  { ClaseService } from "../shared/clase.service"
import { ActivatedRoute } from "@angular/router"
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    templateUrl: './create-seccion.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateSeccionComponent implements OnInit
{
    name: FormControl
    profesor: FormControl
    duracion: FormControl
    descripcion: FormControl
    seccionForm: FormGroup

    constructor(private claseService: ClaseService, private actro: ActivatedRoute)
    {

    }
    
    ngOnInit() {
        
    }

  
}