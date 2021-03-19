import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalizationService } from '../services/localization/localization.service';
import { Lang, NavLink } from '../services/localization/localization.types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links: NavLink[] = this.localService.getLanguageData().navLinks;
  footerText: string[] = Array.from({ length: 9 }).map(
    () => this.localService.getLanguageData().footerText
  );

  constructor(
    private localService: LocalizationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  changeLanguage(lang: Lang) {
    this.localService.language = lang;
    this.router.navigate([lang]);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.localService.language = lang;
      }
    });
  }
}
