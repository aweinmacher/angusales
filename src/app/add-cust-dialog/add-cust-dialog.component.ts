import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Customer } from '../models/customer-model';

@Component({
  selector: 'app-add-cust-dialog',
  template: 'passed in {{ data }}',
  templateUrl: './add-cust-dialog.component.html',
  styleUrls: ['./add-cust-dialog.component.css']
})
export class AddCustDialogComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<AddCustDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any 
  ) { }

  // why do we need this?
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() { }

}
