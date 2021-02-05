import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data-service.service';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  activity: string;
  desires: string;
}

let DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-activitytable',
  templateUrl: './activitytable.component.html',
  styleUrls: ['./activitytable.component.css']
}) 
export class ActivitytableComponent {
  @Output('totalUsers') totalUsers = new EventEmitter<number>();
  columnsToDisplay: string[] = ['name', 'activity', 'desires'];
  myDataArray = new MatTableDataSource();
  date = new Date();
  today = `${this.date.getDate()}/${this.date.getMonth() +
    1}/${this.date.getFullYear()}`;

  constructor(dataService: DataService) {
    // dataService.users.subscribe(res => {
      DATA = [];
    //   this.totalUsers.emit(res.length);
    //   res.forEach(user => {
    //     DATA.push(user);
    //   });
      this.myDataArray.data = DATA;
    // });
  }
}
