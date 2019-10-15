import { Component } from '@angular/core';
@Component({
	selector:'stl',
	template:`
	<br><br><br>

	<button [ngStyle]="
	{
	'backgroudColor':bkclr1,
	'color':bkclr,
	'fontWegight':wght
	}
	">Button</button>
	<button [style.backgroundColor]="bkclr"
	[style.color]="bkclr1"[style.fontWeight]="wght">
	Click</button>
	`
})
export class StlyComponent{
	bkclr="red";
	bkclr1="green";
	wght="bold";                                                                                                             
 }