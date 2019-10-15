import { Component } from '@angular/core';
@Component({
	selector:'cls',
	template:`


	
	<button [ngClass]="
	{'btn':true,
	'btn-primary':true,
	'active':isActive,
	'state':isNotActive
	}
	">Button</button>
	`
})
export class ClssComponent{
	isActive=true;
	isNotActive=true;                                                                                 
 }