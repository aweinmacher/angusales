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
      comp_id: newCust.compId, // got from select input
      email: newCust.email,
      phone: newCust.phone
    });
  }
  deleteCustomer(cust: Customer): Observable<Customer> {
    console.log('delete cust at service');
    return this.http.delete<Customer>(`api/customers/delete/${cust.id}`);
  }
  editCustomer(updCust: Customer): Observable<Customer> {
    console.log('edit cust at service');
    return this.http.put<Customer>(`api/customers/update/${updCust.id}`, {
      firstname: updCust.firstName,
      lastname: updCust.lastName,
      comp_id: Number(updCust.company), // will be replaced with the select input
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

// const CUSTOMERS_DATA: Customer[] = [
//   {id: 1, firstName: 'Hydrogen', lastName: 'H', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 2, firstName: 'Helium', lastName: 'He', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 3, firstName: 'Lithium', lastName: 'Li', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 4, firstName: 'Beryllium', lastName: 'Be', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 5, firstName: 'Boron', lastName: 'B', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 6, firstName: 'Carbon', lastName: 'C', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 7, firstName: 'Nitrogen', lastName: 'N', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 8, firstName: 'Oxygen', lastName: 'O', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 9, firstName: 'Fluorine', lastName: 'F', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 10, firstName: 'Neon', lastName: 'Ne', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 11, firstName: 'Sodium', lastName: 'Na', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 12, firstName: 'Magnesium', lastName: 'Mg', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 13, firstName: 'Aluminum', lastName: 'Al', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 14, firstName: 'Silicon', lastName: 'Si', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 15, firstName: 'Phosphorus', lastName: 'P', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 16, firstName: 'Sulfur', lastName: 'S', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 17, firstName: 'Chlorine', lastName: 'Cl', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 18, firstName: 'Argon', lastName: 'Ar', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 19, firstName: 'Potassium', lastName: 'K', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
//   {id: 20, firstName: 'Calcium', lastName: 'Ca', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'}
// ];