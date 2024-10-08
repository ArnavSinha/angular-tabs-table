import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tab1Service } from '../services/tab1.service';
import { Tab2Service } from '../services/tab2.service';
import { Tab3Service } from '../services/tab3.service';

export interface ExampleData {
  name: string;
  position: number;
  value: string;
}

@Component({
  selector: 'app-tabs-view',
  templateUrl: './tabs-view.component.html',
  styleUrl: './tabs-view.component.css'
})
export class TabsViewComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'value'];
  dataSource1 = new MatTableDataSource<ExampleData>();
  dataSource2 = new MatTableDataSource<ExampleData>();
  dataSource3 = new MatTableDataSource<ExampleData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private tab1Service: Tab1Service,
    private tab2Service: Tab2Service,
    private tab3Service: Tab3Service
  ) {  }

  ngOnInit() { 
    this.fetchTabData(0);
   }
  
  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
    this.dataSource3.paginator = this.paginator;
    this.dataSource3.sort = this.sort;
  }

  fetchTabData(tab: number) {
    switch (tab) {
      case 0:
        this.tab1Service.getData().subscribe(data => {
          this.dataSource1.data = data;
        });
        break;
      case 1:
        this.tab2Service.getData().subscribe(data => {
          this.dataSource2.data = data;
        });
        break;
      case 2:
        this.tab3Service.getData().subscribe(data => {
          this.dataSource3.data = data;
        });
        break;
      default:
        break;
    }
  }

}
