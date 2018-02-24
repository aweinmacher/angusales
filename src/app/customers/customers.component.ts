import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Customer } from '../models/customer-model';

/*** @title Table with filtering */
@Component({
  selector: 'app-customers',
  styleUrls: ['./customers.component.css'],
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone', 'icons'];
  data: Customer[];
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getCustomers()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator; },
        error => { console.error(error) });
    ;

    // this.dataService.getCustomers()
    //   .subscribe(data => this.data = data,
    //     error => { console.error(error) });
    // ;
    // console.log(this.data);
    // this.dataSource = new MatTableDataSource(this.data);

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  

  /*** Set the paginator after the view init since this component will be able to query its view for the initialized paginator. */
  // ngAfterViewInit() {
  //   // this.dataSource.paginator = this.paginator;
  // }

}
