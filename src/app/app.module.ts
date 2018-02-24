import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { MatTableModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatDialogModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CustomersComponent } from './customers/customers.component';
import { CompaniesComponent } from './companies/companies.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustDialogComponent } from './add-cust-dialog/add-cust-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomersComponent,
    CompaniesComponent,
    CustomerComponent,
    AddCustDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [NavComponent, AddCustDialogComponent],
})
export class AppModule { }
