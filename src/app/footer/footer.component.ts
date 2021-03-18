import { Component, OnInit } from '@angular/core';
import { FooterInfoService } from '../services/footer-info/footer-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links = this.info.navLinks;
  footerText = Array.from({ length: 7 }).map((_) => this.info.footerText);

  constructor(private info: FooterInfoService) { }

  ngOnInit(): void {
  }

}
