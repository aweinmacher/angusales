import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Customer } from '../models/customer-model';

/*** @title Table with filtering */
@Component ({
  selector: 'app-customers',
  styleUrls: ['./customers.component.css'],
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /*** Set the paginator after the view init since this component will be able to query its view for the initialized paginator. */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
