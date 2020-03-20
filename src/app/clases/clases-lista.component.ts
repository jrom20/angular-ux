import { Component, OnInit } from '@angular/core';
import { ClaseService } from './shared/clase.service'
import { IClase } from './shared/clase.model';

declare let toastr:any

@Component({
    selector: 'clases-lista',
    template: `
        <div>
            <h1> Listado de clases</h1>
            <ngb-carousel *ngIf="images">
                <ng-template ngbSlide>
                    <div class="picsum-img-wrapper">
                    <img [src]="images[0]" alt="Random first slide">
                    </div>
                    <div class="carousel-caption">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </ng-template>
                <ng-template ngbSlide>
                    <div class="picsum-img-wrapper">
                    <img [src]="images[1]" alt="Random second slide">
                    </div>
                    <div class="carousel-caption">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </ng-template>
                <ng-template ngbSlide>
                    <div class="picsum-img-wrapper">
                    <img [src]="images[2]" alt="Random third slide">
                    </div>
                    <div class="carousel-caption">
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </ng-template>
                </ngb-carousel>
            <hr/>
            <div class="row">
                <div *ngFor="let pClase of ClasesDisponible" class="col-md-6">
                    <event-thumbnail (click)="toasterClick()" [clase]="pClase" class="col-md-6"></event-thumbnail>
                <div>
            </div>
        <div>
    `,
    styles: [`
    .picsum-img-wrapper > img{
        
            width: 100%;
            max-width: 100%;
            display: block;
            margin: 0;
        
    }
    `]
})
 
export class ClasesListaComponent implements OnInit{
    
    ClasesDisponible:IClase[]
    claseService:any
    
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    constructor(pClaseService: ClaseService){
        this.claseService = pClaseService;
    }   

    ngOnInit()
    {
        this.claseService.getClases().subscribe(data => { this.ClasesDisponible = data});
    }

    toasterClick()
    {
        toastr.success('Hola');
    }

}
  