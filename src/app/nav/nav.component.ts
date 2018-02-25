import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustDialogComponent } from '../cust-dialog/cust-dialog.component';
import { Customer } from '../models/customer-model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  newCustomer: Customer = new Customer();

  constructor(
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  ngOnInit() { }

  openDialog(): void {
    let dialogRef = this.dialog.open(CustDialogComponent, {
      width: '50vw',
      data: {cust: this.newCustomer, heading: 'New'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.dataService.addCustomer(result).subscribe(
        data => this.dataService.getCustomers()
      );
    });
  }

}
