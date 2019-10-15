import { Component } from '@angular/core';
@Component({
	selector:'case',
	template:`
	<div [ngSwitch]="section">
	<div *ngSwitchCase="'D1501'"> Fourth Year</div>

	<div *ngSwitchCase="'D1401'"> Fifth year </div>
	<div *ngSwitchDefault>None</div>

	</div>`
})
export class CaseeComponent{
	section="D1101";
	//sizz=arr.length;                                                                                 
 }