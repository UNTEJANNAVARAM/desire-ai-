import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Child imports
import { Header } from './header/header';
import { LeftNav } from './left-nav/left-nav';
import { MainContentArea } from './main-content-area/main-content-area';
import { MainCta } from './main-cta/main-cta';
import { Footer } from './footer/footer';
import { WizardState } from '../services/wizard-state';

@Component({
  selector: 'app-ui-shell',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    LeftNav,
    MainContentArea,
    MainCta,
    Footer
  ],
  templateUrl: './ui-shell.html',
  styleUrls: ['./ui-shell.scss']
})
export class UiShell {
    constructor(public wizard: WizardState) {}

  next() {
    this.wizard.goNext();
  }

  back() {
    this.wizard.goBack();
  }
}
