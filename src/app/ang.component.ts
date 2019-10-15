import {Component, Input} from '@angular/core';
@Component({
selector:'bank-account',
template:`
Bank Name:{{bankName}}
Account Id:{{id}}`
})
export class BankAccount{
	@Input()bankName:string;
	@Input('Account-Id')id:string;
}
@Component({
	selector:'app',
	template:`
	<bank-account bankName="RBC"
	Account-Id="4747"></bank-account>`
})
export class App{}