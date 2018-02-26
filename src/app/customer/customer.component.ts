import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustDialogComponent } from '../cust-dialog/cust-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Customer } from '../models/customer-model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  cust: Customer;
  compList: any[];
  constructor( 
    private route: ActivatedRoute,
    private dataService: DataService,
    public dialog: MatDialog,
    private router: Router
   ) { }

  ngOnInit() {
    // to update the view after edit
    this.route.params.subscribe(params => {
      this.dataService.getCustById(params.id);
      this.dataService.singleCust$.subscribe(data => this.cust = data[0]);
    });
    // to make edit customer dialog work with companies' list
    this.dataService.getCompanies();
    this.dataService.companiesData$
      .subscribe(data => {
        this.compList = data.map(item => {
          return { comp_id: item.id, name: item.name }
        })
      })
  }

  deleteCustomer(cust: Customer) {
    this.dataService.deleteCustomer(cust).subscribe(
      (res)=> { if (res) {
          this.router.navigate(['/']); 
      }}
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
          data => { 
            this.dataService.getCustById(updCustomer.id);
          }
        );
      }
    });
  }
}
