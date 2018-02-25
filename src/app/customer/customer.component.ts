import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Customer } from '../models/customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  cust: Customer;
  constructor( 
    private route: ActivatedRoute,
    private dataService: DataService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("the id parameter is: " + params.id);
      this.dataService.getCustById(params.id).subscribe(data => this.cust = data[0]);
    });
  }

}
