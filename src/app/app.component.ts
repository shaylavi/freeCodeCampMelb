import { Component, HostListener, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  totalUsers = 0;
  currentSize = 'initial';
  selectedRadio = '';
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
      const table = document.getElementsByClassName('data-table') as HTMLCollectionOf<HTMLElement>;
      if (table.length > 0) {
        if (table[0].style.marginLeft === '100px') {
          table[0].style.setProperty('margin-left', 'auto');
        } else {
          table[0].style.setProperty('margin-left', '100px');
        }
      }
    }
  }
  ngOnInit() {
    let ACTIVE_SLIDE_NUMBER = 6;
    const PARAM_NAME = 'slide';
    const url = new URL(document.location.href);
    if (url.searchParams.get(PARAM_NAME) !== null && url.searchParams.get(PARAM_NAME) !== '') {
      ACTIVE_SLIDE_NUMBER = Number.parseInt(url.searchParams.get(PARAM_NAME));
    }

    const carouselElement = document.getElementById('carousel-' + ACTIVE_SLIDE_NUMBER) as HTMLInputElement;
    carouselElement.checked = true;
    this.selectedRadio = 'carousel-' + ACTIVE_SLIDE_NUMBER;
  }
  onTotalUsers(users: number) {
    this.totalUsers = users;
  }
  changeSize() {
    const regLink = document.getElementById('reg-link');
    const followLink = document.getElementById('follow-link');
    const linkText = document.getElementById('link-text');
    const followText = document.getElementById('follow-text');
    const bottomLinks = document.getElementById('bottom-links');
    if (this.currentSize === 'initial') {
      this.currentSize = 'final';
      linkText.className = 'link-text link-text-large';
      regLink.className = 'reg-link inflate-text text-glow separate-lines';
      followLink.className = 'reg-link inflate-text2 separate-lines';
      followText.className = 'link-text link-text-large';
      followText.style.marginTop = '25px';
      followLink.style.color = 'red';
      bottomLinks.style.visibility = 'hidden';
    } else {
      this.currentSize = 'initial';
      linkText.className = 'link-text';
      regLink.className = 'reg-link';
      followLink.className = 'reg-link';
      followText.className = 'link-text';
      followText.style.color = 'white';
      followLink.style.color = 'white';
      bottomLinks.style.visibility = 'visible';
    }
  }
  onChange(val) {
    this.selectedRadio = val.srcElement.id;
  }
}
