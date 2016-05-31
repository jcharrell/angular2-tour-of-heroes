import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    providers: [HeroService, ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['Heroes']">Heroes</a>
        <router-outlet></router-outlet>
    `,
    styles:[``]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])

export class AppComponent {
    title: 'Tour of Heroes'
}
