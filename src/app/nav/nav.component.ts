import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustDialogComponent } from '../cust-dialog/cust-dialog.component';
import { CompDialogComponent } from '../comp-dialog/comp-dialog.component';
import { DataService } from '../data.service';
import { Customer } from '../models/customer-model';
import { Company } from '../models/company-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  newCustomer: Customer = new Customer();
  newCompany: Company = new Company();
  compList: any[]; 

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // to make add customer dialog work with companies' list
    this.dataService.getCompanies();
    this.dataService.companiesData$
      .subscribe(data => {
        this.compList = data.map(item => {
          return { comp_id: item.id, name: item.name }
        })
      })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CustDialogComponent, {
      width: '50vw',
      data: { cust: this.newCustomer, heading: 'New', compList: this.compList }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.dataService.addCustomer(result).subscribe(
          data => this.dataService.getCustomers()
        );
      }
      this.newCustomer = new Customer();
    });
  }

  openCompDialog(): void {
    let dialogRef = this.dialog.open(CompDialogComponent, {
      width: '50vw',
      data: { comp: this.newCompany, heading: 'New' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The company dialog was closed', result);
      if (result) {
        this.dataService.addCompany(result).subscribe(
          data => this.dataService.getCompanies()
        );
      }
    });
  }
}


