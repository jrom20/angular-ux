import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[
        `.navbar-default {
            background-color: #414952;
            color: aliceblue;
        }`,
        `a {
            color: #f5f5f5;
            text-decoration: none;
            background-color: transparent;
        }`
    ]
})

export class NavBarComponent
{
    constructor(public auth:AuthService) {
        
    }
} 