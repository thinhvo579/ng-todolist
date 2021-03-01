import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
selector:'child-contact',
template:`<p></p>`

})
export class childcontactComponent implements OnInit{
@Input() childValue: string ="";
constructor() { }
    ngOnInit(): void {
        console.log(this.childValue)
    }
}
