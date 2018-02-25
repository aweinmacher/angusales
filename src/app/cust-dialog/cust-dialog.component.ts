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

  constructor( 
    public dialogRef: MatDialogRef<CustDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any 
  ) { }

  // why do we need this?
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() { }

}
