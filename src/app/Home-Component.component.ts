import {Component} from '@angular/core';
@Component({
    selector: 'identificador',
    template: `<h1>{{title}}</h1>`,
    styles : ['h1{font-weight:bold; font-size:30px;}']
})
export class HomeComponent{
    title = 'Felipe Nunes'
}