import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeightService {
  private otherComponentHeight: number = 0;

  setOtherComponentHeight(height: number) {
    this.otherComponentHeight = height;
  }

  getOtherComponentHeight() {
    return this.otherComponentHeight;
  }

  constructor() { }
}
