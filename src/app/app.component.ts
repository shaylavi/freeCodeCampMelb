import { Component } from '@angular/core';
import { DataService } from './data-service.service';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('nextSlide', [
      state('initial', style({
        transform: 'translateX(0%)'
        // ,backgroundColor: 'green',
        // width: '500px',
        // height: '100px'
      })),
      state('final', style({
        transform: 'translateX(100%)'
        // ,backgroundColor: 'green',
        // width: '500px',
        // height: '100px'
      })),
      transition('initial=>final', animate('1600ms', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(40%)', offset: 0.33}),
        style({transform: 'translateX(60%)', offset: 0.66}),
        style({transform: 'translateX(100%)', offset: 1.0}),
      ]
      ))),
      transition('final=>initial', animate('500ms'))
    ]),
  ]
  })

export class AppComponent {
  constructor(dataService: DataService) {
    this.myDataArray = dataService.getData();
  }
  myDataArray;
  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
