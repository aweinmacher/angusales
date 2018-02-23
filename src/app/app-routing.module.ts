import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [  
  { path: '', component: CustomersComponent},  
  { path: 'customers/:id', component: CustomerComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: '**', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
