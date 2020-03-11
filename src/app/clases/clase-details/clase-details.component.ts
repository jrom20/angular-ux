import { Component, OnInit } from "@angular/core";
import  { ClaseService } from "../shared/clase.service"
import { ActivatedRoute } from "@angular/router"
import { IClase } from '../shared/clase.model';

@Component({
    selector: "clase-detalle",
    templateUrl: '../clase-details//clase-details.component.html',
    styles: ['        .a-button { color: orange; cursor:pointer;}']
})

export class ClaseDetailsComponent implements OnInit
{
    clase:IClase
    addMode:boolean

    constructor(private claseService: ClaseService, private actro: ActivatedRoute)
    {

    }
    
    ngOnInit(): void {

        this.clase = this.claseService.getClasesbyid(+this.actro.snapshot.params['id'])
    }
    
    AddSeccion()
    {
        this.addMode = true;
    }

}