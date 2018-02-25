import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Company } from '../models/company-model';

@Component({
  selector: 'app-comp-dialog',
  template: 'passed in {{ data }}',
  templateUrl: './comp-dialog.component.html',
  styleUrls: ['./comp-dialog.component.css']
})
export class CompDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CompDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  // why do we need this?
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
