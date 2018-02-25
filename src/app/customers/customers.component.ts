import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustDialogComponent } from '../cust-dialog/cust-dialog.component';
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
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // updCustomer: Customer = new Customer(); // for the edit dialog
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataService.customersData$
    .subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; },
      error => { console.error(error) });
  ;
  this.dataService.getCustomers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  deleteCustomer(cust: Customer) {
    this.dataService.deleteCustomer(cust).subscribe(
      data => this.dataService.getCustomers()
    );
  }
  
  openDialog(updCustomer): void {
    let dialogRef = this.dialog.open(CustDialogComponent, {
      width: '50vw',
      data: {cust: updCustomer, heading: 'Edit'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.dataService.editCustomer(result).subscribe(
        data => this.dataService.getCustomers()
      );
    });
  }

  /*** Set the paginator after the view init since this component will be able to query its view for the initialized paginator. */
  // ngAfterViewInit() {
  //   // this.dataSource.paginator = this.paginator;
  // }

}
