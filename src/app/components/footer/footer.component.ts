import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private scrollService: ScrollService) { }

  navigateToSection(sectionId: string) {
    this.scrollService.scrollToSection.next(sectionId);
  }

}
