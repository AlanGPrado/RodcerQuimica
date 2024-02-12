import { Component, ElementRef, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { HeightService } from 'src/app/services/height/height.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showMobileMenu: boolean = false;
  showLanguage: boolean = false;
  showLanguageMobile: boolean = false;
  private threshold: number = 0;

  constructor(private scrollService: ScrollService, private el: ElementRef, private heightService: HeightService, private translate: TranslateService) { }

  ngOnInit() {
    this.threshold = this.heightService.getOtherComponentHeight();
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLElement).getAttribute('data-value');
    if (selectedLanguage) {
      this.translate.use(selectedLanguage);
    }
  }


  navigateToSection(sectionId: string) {
    this.scrollService.scrollToSection.next(sectionId);
  }

  showMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  showLanguageMenu() {
    this.showLanguage = !this.showLanguage;
  }

  showLanguageMenuMobile() {
    this.showLanguageMobile = !this.showLanguageMobile;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    const mobileMenu = this.el.nativeElement.querySelector('.menu-mobile');
    const languageMenu = this.el.nativeElement.querySelector('.language');
    const languageMenuMobile = this.el.nativeElement.querySelector('.menu-mobile');

    if (!mobileMenu.contains(target)) {
      this.showMobileMenu = false;
    }

    if (!languageMenu.contains(target)) {
      this.showLanguage = false;
    }

    if (!languageMenuMobile.contains(target)) {
      this.showLanguageMobile = false;
    }
  }


  // Apply blur jjst to the header in beggining
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= this.threshold) {
      // Apply CSS changes when the scroll position is at or beyond the threshold
      this.el.nativeElement.querySelector('header')?.classList.add('change-on-scroll');
    } else {
      // Revert the CSS changes when the scroll position is less than the threshold
      this.el.nativeElement.querySelector('header')?.classList.remove('change-on-scroll');
    }
  }

}
