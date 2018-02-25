import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from '../data.service';
import { Company } from '../models/company-model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'address', 'country', 'count'];
  dataSource: MatTableDataSource<Company>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.companiesData$
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
        error => { console.error(error) });
    ;
    this.dataService.getCompanies();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
