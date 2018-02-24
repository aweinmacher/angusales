import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Customer } from '../models/customer-model';

/*** @title Table with filtering */
@Component ({
  selector: 'app-customers',
  styleUrls: ['./customers.component.css'],
  templateUrl: './customers.component.html',
})
export class CustomersComponent {
  displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone', 'icons'];
  data: Customer[];
  dataSource: MatTableDataSource<Customer>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.data = this.dataService.getCustomers();
    this.dataSource = new MatTableDataSource(this.data);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
