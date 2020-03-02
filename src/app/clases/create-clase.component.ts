import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h1>Crear Nuevo Clase</h1>
        <hr>
        <div class="col-md-6">
            <h3>Aqui ira nuestro formulario para crear un nuevo Clase</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Guardar</button>
            <button type="button" class="btn btn-default" (click)="fnGoBack()">Cancelar</button>
        </div>
    `
})
export class CreateClaseComponent
{
    isFormDirty:boolean = true

    constructor(private router: Router) {

    }

    fnGoBack()
    {
        this.router.navigate(['/clases'])
    }
}