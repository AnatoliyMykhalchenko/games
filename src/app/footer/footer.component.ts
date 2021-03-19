import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links = this.localService.getLanguageData().navLinks;
  footerText = Array.from({ length: 9 }).map(
    () => this.localService.getLanguageData().footerText
  );

  constructor(
    private localService: LocalizationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  changeLanguage(lang) {
    this.localService.language = lang;
    this.router.navigate([lang]);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.localService.language = event.urlAfterRedirects.slice(1);
      }
    });
  }
}
