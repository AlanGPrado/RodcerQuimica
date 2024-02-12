import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { HeightService } from 'src/app/services/height/height.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private scrollService: ScrollService, private heightService: HeightService) { }

  ngOnInit() {
    this.scrollService.scrollToSection.subscribe((sectionId) => {
      if (sectionId) {
        this.scrollToCustomDiv(sectionId);
      }
    });

    const otherComponent = document.getElementById('inicio');
    if (otherComponent) {
      const height = otherComponent.clientHeight;
      this.heightService.setOtherComponentHeight(height);
    }
  }

  scrollToCustomDiv(sectionId: string) {
    const customDivElement = document.getElementById(sectionId);
    if (customDivElement) {
      customDivElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navigateToSection(sectionId: string) {
    this.scrollService.scrollToSection.next(sectionId);
  }

}
