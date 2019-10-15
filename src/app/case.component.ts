import { Component } from '@angular/core';
@Component({
	selector:'case',
	template:`
	<div [ngSwtich]="section">
	<div *ngSwtichCase="'D1501'"> Fourth Year</div>

	<div *ngSwtichCase="'D1401'"> Fifth year </div>

	</div>`
})
export class CaseeComponent{
	Section="D1501";
	//sizz=arr.length;                                                                                 
 }