import {Component, Input} from '@angular/core';
@Component({
    selector:'app-square',
    // template:`
    //     <p>
    //         square works!: {{randon}}
    //     </p>
    // `,
    template: '<button>{{value}}</button>',
    styles:[''],
})
export class SquareComponent{
    @Input() value: 'X' | 'O';
    
    // randon = Math.random();
    // constructor(){
    //     setInterval(() => this.randon = Math.random(), 500)
    // }
}