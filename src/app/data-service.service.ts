import { Injectable } from '@angular/core';

const DATA = [
  // { name: '', plan: '' },
  // { name: '', plan: '' },
  // { name: '', plan: '' }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getData() {
    return DATA ;
  }
}
