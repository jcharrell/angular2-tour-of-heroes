import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    providers: [HeroService],
    directives: [HeroesComponent],
    template: `<h1>{{title}}</h1>
               <my-heroes></my-heroes>
    `,
    styles:[``]
})

export class AppComponent {
    title: 'Tour of Heroes'
}
