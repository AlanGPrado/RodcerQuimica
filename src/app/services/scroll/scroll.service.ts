import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToSection = new BehaviorSubject<string>('');

  constructor() { }
}
