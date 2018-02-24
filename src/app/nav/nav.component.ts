import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCustDialogComponent } from '../add-cust-dialog/add-cust-dialog.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit() { }

  openDialog() {
    this.dialog.open(AddCustDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}
