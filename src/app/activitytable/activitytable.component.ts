import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-activitytable',
  templateUrl: './activitytable.component.html',
  styleUrls: ['./activitytable.component.css']
})
export class ActivitytableComponent {
  constructor(dataService: DataService) {
    this.myDataArray = dataService.getData();
  }

  date = new Date();
  today = `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`;
  columnsToDisplay: string[] = ['name', 'plan'];
  myDataArray;

}
