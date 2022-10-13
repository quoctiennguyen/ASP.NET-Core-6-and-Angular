import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { City } from './city';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})

export class CitiesComponent implements OnInit {
  public cities!: MatTableDataSource<City>;
  public displayedColumns: string[] = ['id', 'name', 'lat', 'lon'];
  constructor(private http: HttpClient) {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.http.get<City[]>(environment.baseUrl + 'api/Cities')
      .subscribe(result => {
        this.cities = new MatTableDataSource<City>(result);
        this.cities.paginator = this.paginator;
      }, error => console.error(error));
  }

}

