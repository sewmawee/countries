import { Component, OnInit } from '@angular/core';
import { Country } from './countries.model';
import { DataService } from './data.service';
import {MatTableDataSource} from '@angular/material/table';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['name','alpha2code', 'alpha3code'];
  dataSource = new MatTableDataSource();
public results:any ;

  constructor(private dataService: DataService) {}

  getcurrentCountries(user) : void {
    console.log(user);
  }

  ngOnInit() {
    this.dataService.getCountries().subscribe((data =>{ this.results = data;})) 
  }

  
}
