import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Customer } from '../models/customer-model';

@Component({
  selector: 'app-cust-dialog',
  template: 'passed in {{ data }}',
  templateUrl: './cust-dialog.component.html',
  styleUrls: ['./cust-dialog.component.css']
})
export class CustDialogComponent implements OnInit {

  selected: Customer = new Customer;

  constructor( 
    public dialogRef: MatDialogRef<CustDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any 
  ) { }

  // for Cancel button
  onNoClick(): void {
    this.dialogRef.close();
    this.selected = Object.assign({}, this.data.cust);
  }

  ngOnInit() { 
    this.selected = Object.assign({}, this.data.cust);
  }

}
