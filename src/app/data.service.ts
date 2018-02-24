import { Injectable } from '@angular/core';
import { Customer } from './models/customer-model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  // getCustomers():Customer[] {
  //   return CUSTOMERS_DATA;
  // }

  getCustomers():Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/customers');
  }

}

const CUSTOMERS_DATA: Customer[] = [
  {id: 1, firstName: 'Hydrogen', lastName: 'H', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 2, firstName: 'Helium', lastName: 'He', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 3, firstName: 'Lithium', lastName: 'Li', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 4, firstName: 'Beryllium', lastName: 'Be', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 5, firstName: 'Boron', lastName: 'B', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 6, firstName: 'Carbon', lastName: 'C', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 7, firstName: 'Nitrogen', lastName: 'N', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 8, firstName: 'Oxygen', lastName: 'O', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 9, firstName: 'Fluorine', lastName: 'F', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 10, firstName: 'Neon', lastName: 'Ne', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 11, firstName: 'Sodium', lastName: 'Na', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 12, firstName: 'Magnesium', lastName: 'Mg', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 13, firstName: 'Aluminum', lastName: 'Al', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 14, firstName: 'Silicon', lastName: 'Si', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 15, firstName: 'Phosphorus', lastName: 'P', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 16, firstName: 'Sulfur', lastName: 'S', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 17, firstName: 'Chlorine', lastName: 'Cl', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 18, firstName: 'Argon', lastName: 'Ar', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 19, firstName: 'Potassium', lastName: 'K', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'},
  {id: 20, firstName: 'Calcium', lastName: 'Ca', company: 'Elevation', email: 'Hydrogen@wework.com', phone: '123'}
];