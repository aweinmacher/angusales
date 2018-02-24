import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-add-cust-dialog',
  templateUrl: './add-cust-dialog.component.html',
  styleUrls: ['./add-cust-dialog.component.css']
})
export class AddCustDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {  }

}
