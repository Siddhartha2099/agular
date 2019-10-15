import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AqwComponent } from './data.component';
//import { doubleComponent } from './twoway.component';
import { DrctComponent } from './dirct.component';
import { StlyComponent } from './style.component';
import { ClssComponent } from './class.component';
import { CaseeComponent } from './swtich.component';
import { BankAccount } from './ang.component';
import { App } from './ang.component';
import { Registration } from './ang1.component';
import { Deta } from './ang1.component';
import { BtanComponent } from './boot.component';

@NgModule({
  declarations: [
    AppComponent,
  //  AqwComponent,
  //  doubleComponent,
    DrctComponent,
    StlyComponent,
    ClssComponent,
    CaseeComponent,
    BankAccount,
    App,
    Registration,
    Deta,
    BtanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
