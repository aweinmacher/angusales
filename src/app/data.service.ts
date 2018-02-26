import { Injectable } from '@angular/core';
import { Customer } from './models/customer-model';
import { Company } from './models/company-model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  customersData$: Subject<Customer[]> = new Subject();
  companiesData$: Subject<Company[]> = new Subject();

  constructor(private http: HttpClient) { }

  getCustomers(): void {
    this.http.get<Customer[]>('api/customers')
    .subscribe(
      data => this.customersData$.next(data)
    );
  }
  getCustById(id): Observable<Customer[]> {
    console.log('get cust by ID at service');
    return this.http.get<Customer[]>(`api/customers/${id}`);
  }
  addCustomer(newCust: Customer):Observable<Customer> { // better to do at the server
    console.log('add cust at service');
    return this.http.post<Customer>('api/customers/add', {
      firstname: newCust.firstName,
      lastname: newCust.lastName,
      comp_id: newCust.compId,
      email: newCust.email,
      phone: newCust.phone
    });
  }
  deleteCustomer(cust: Customer): Observable<Customer> {
    console.log('delete cust at service');
    return this.http.delete<Customer>(`api/customers/delete/${cust.id}`);
  }
  editCustomer(updCust: Customer): Observable<Customer> { // better to do at the server
    console.log('edit cust at service');
    return this.http.put<Customer>(`api/customers/update/${updCust.id}`, {
      firstname: updCust.firstName,
      lastname: updCust.lastName,
      comp_id: updCust.compId,
      email: updCust.email,
      phone: updCust.phone
    });
  }

  getCompanies(): void {
    this.http.get<Company[]>('api/companies')
    .subscribe(
      data => this.companiesData$.next(data)
    );
  }
  addCompany(newComp: Company):Observable<Company> { // better to do at the server
    console.log('add comp at service');
    return this.http.post<Company>('api/companies/add', {
      name: newComp.name,
      address: newComp.address,
      country: newComp.country
    });
  }

}