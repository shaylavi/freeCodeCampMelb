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
      transition('initial=>final', animate('500ms 0.2ms ease-in-out'
      // , keyframes([
      //   style({transform: 'translateX(0)', offset: 0}),
      //   style({transform: 'translateX(25%)', offset: 0.33}),
      //   style({transform: 'translateX(75%)', offset: 0.66}),
      //   style({transform: 'translateX(100%)', offset: 1.0}),
      // ])
      )),
      transition('final=>initial', animate('500ms 0.2ms ease-in-out'))
    ]),
    trigger('qrCode', [
      state('initial', style({
        width: '210px',
        height: '210px'
      })),
      state('final', style({
        width: '440px',
        height: '440px'
      })),
      transition('initial=>final', animate('500ms 0.2ms ease-in-out'
      )),
      transition('final=>initial', animate('500ms 0.2ms ease-in-out'))
    ]),
  ]
  })

export class AppComponent {
  totalUsers = 0;
  currentState = 'initial';
  currentSize = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  changeSize() {
    this.currentSize = this.currentSize === 'initial' ? 'final' : 'initial';
  }
  onTotalUsers(users: number) {
    this.totalUsers = users;
  }
}
