import {Component, Input} from '@angular/core';
@Component({
selector:'Register',
template:`
Student Name:{{Studentname}}
Student Id:{{id}}`
})
export class Registration{
	@Input()Studentname:string;
	@Input('Student-Id')id:string;
}
@Component({
	selector:'deta',
	template:`
	<Register Studentname="Siddhartha"
	Student-Id="11712911"></Register>`
})
export class Deta{}