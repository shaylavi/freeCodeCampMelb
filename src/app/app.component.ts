import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css-carousel.css'],
  animations: [
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
    ])
  ]
  })

export class AppComponent {
  totalUsers = 0;
  currentSize = 'initial';

  onTotalUsers(users: number) {
    this.totalUsers = users;
  }
  changeSize() {
    this.currentSize = this.currentSize === 'initial' ? 'final' : 'initial';
  }
}
