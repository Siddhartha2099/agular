import { Component } from '@angular/core';
@Component({
	selector:'tooway',
	template:`<input [(ngModel)]="c" (keyup.enter)="function1()"/>`

})
export class doubleComponent
{
	 c="A1234";
	 function1()
	{
	console.log("hey!"+this.c);
	}
}