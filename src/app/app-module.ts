import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListEmployees } from './list-employees/list-employees';
import { FormsModule } from '@angular/forms';
import { Navbar } from './navbar/navbar';
import { EmployeeDetail } from './employee-detail/employee-detail';

@NgModule({
  declarations: [
    App,
    ListEmployees,
    Navbar,
    EmployeeDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
