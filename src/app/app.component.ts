import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css-carousel.css'],
  animations: [
    trigger('qrCode', [
      state(
        'initial',
        style({
          width: '210px',
          height: '210px'
        })
      ),
      state(
        'final',
        style({
          width: '660px',
          height: '660px'
        })
      ),
      transition('initial=>final', animate('500ms 0.2ms ease-in-out')),
      transition('final=>initial', animate('500ms 0.2ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  totalUsers = 0;
  currentSize = 'initial';
  selectedRadio = 'carousel-1';
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let radioButton;
    if (event.key === 'ArrowRight') {
      const currentLoc = parseInt(
        this.selectedRadio[this.selectedRadio.length - 1],
        10
      );
      if (currentLoc >= 1 && currentLoc < 6) {
        const newSelection =
          this.selectedRadio.substring(0, this.selectedRadio.length - 1) +
          (currentLoc + 1);
        radioButton = document.getElementById(newSelection) as HTMLInputElement;
        radioButton.checked = true;
        this.selectedRadio = newSelection;
      }
    } else if (event.key === 'ArrowLeft') {
      const currentLoc = parseInt(
        this.selectedRadio[this.selectedRadio.length - 1],
        10
      );
      if (currentLoc > 1 && currentLoc <= 6) {
        const newSelection =
          this.selectedRadio.substring(0, this.selectedRadio.length - 1) +
          (currentLoc - 1);
        radioButton = document.getElementById(newSelection) as HTMLInputElement;
        radioButton.checked = true;
        this.selectedRadio = newSelection;
      }
    } else if (event.key === 'ArrowUp') {
      document.getElementById('qrCode').click();
    }
  }
  onTotalUsers(users: number) {
    this.totalUsers = users;
  }
  changeSize() {
    if (this.currentSize === 'initial') {
      this.currentSize = 'final';
      document.getElementById('reg-link').className = 'reg-link inflate-text text-glow';
    } else {
      this.currentSize = 'initial';
      document.getElementById('reg-link').className = 'reg-link';
    }
  }
  onChange(val) {
    this.selectedRadio = val.srcElement.id;
  }
}
