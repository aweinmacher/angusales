import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustDialogComponent } from '../cust-dialog/cust-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Customer } from '../models/customer-model';

@Component({
  selector: 'app-customers',
  styleUrls: ['./customers.component.css'],
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'company', 'phone', 'icons'];
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  compList: any[];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // to make edit customer dialog work with companies' list
    this.dataService.getCompanies();
    this.dataService.companiesData$
      .subscribe(data => {
        this.compList = data.map(item => {
          return { comp_id: item.id, name: item.name }
        })
      })
    // to build the table and update it after every change
    this.dataService.customersData$
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
        error => { console.error(error) });
    ;
    this.dataService.getCustomers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
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
      data: { cust: updCustomer, heading: 'Edit', compList: this.compList }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.dataService.editCustomer(result).subscribe(
          data => this.dataService.getCustomers()
        );
      }
    });
  }

}
