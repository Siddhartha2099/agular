import { Component } from'@angular/core';
@Component({
	selector:'details',
	template:`
	<input [(ngModel)]="x" (keyup.enter)="function1()"/>
	<input [(ngModel)]="y" (keyup.enter)="function2()"/>
	<input [(ngModel)]="z" (keyup.enter)="function3()"/>
	<input [(ngModel)]="a" (keyup.enter)="function4()"/>
	`
})
export class AqwComponent{
	x="Siddhartha";
	y="8433153769";
	z="Web";
	a="2years";
	 function1()
	{
	console.log("hey!"+this.x);
	}
	 function2()
	{
	console.log("hey!"+this.y);
	}
	 function3()
	{
	console.log("hey!"+this.z);
	}
	 function4()
	{
	console.log("hey!"+this.a);
	}
}