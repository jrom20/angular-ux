import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { IClase } from './clase.model';

@Injectable()
export class ClaseService
{
    getClases(): Observable<IClase[]>{
        
        let subject = new Subject<IClase[]>()
        setTimeout(() => {
            subject.next(ClasesDisponible);
            subject.complete();
        }, 100);

        return subject;
    }
    
    getClasesbyid(id:number){

        return ClasesDisponible.find(clases => clases.id === id)
    }

    saveClase(nuevaClase){
        nuevaClase.id = 564;
        nuevaClase.secciones = [];
        ClasesDisponible.push(nuevaClase);
    }
    
}

const ClasesDisponible: IClase[]  = 
    [
        {
            id: 1,
            name: 'Experiencia de Usuario',
            time: '6:40 pm',
            location: {
                room: 'LSW',
                campus: 'SPS'
            },
            ImageUrl: '/assets/basic-shield.png',
            secciones: [
                { id:1, name: 'PX-04', profesor: 'Juan Romero', duracion: '1 hora', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas nisi sem, eget posuere massa dictum quis. Nam laoreet quis urna id consequat. Donec' },
                { id:2, name: 'PX-006', profesor: 'Juan Romero', duracion: '1 hora', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas nisi sem, eget posuere massa dictum quis. Nam laoreet quis urna id consequat. Donec' }
            ]
        },
        {
            id: 2,
            name: 'Matematicas discretas',
            time: '8:40 am',
            location: {
                room: '305',
                campus: 'SPS'
            },
            ImageUrl: '/assets/basic-shield.png'
        },
        {
            id: 3,
            name: 'Fisica I',
            time: '6:40 pm',
            location: {
                room: '211',
                campus: 'SPS'
            },
            ImageUrl: '/assets/basic-shield.png'
        },
        {
            id: 4,
            name: 'Fisica II',
            time: '5:20 pm',
            location: {
                room: '310',
                campus: 'SPS'
            },
            ImageUrl: '/assets/basic-shield.png'
        }
    ]