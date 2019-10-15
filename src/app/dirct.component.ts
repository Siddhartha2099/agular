import { Component } from'@angular/core';
@Component
({
	selector:'Drc',
	template:`
	<Div *ngIf="arr.length>0">Array has {{arr.length}}elements</Div>

	<Div *ngIf="arr.length==0">
	Array is Empty</Div>
	`
})
export class DrctComponent{
	arr=[1,2,3,4];
}