import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { WizardState, WizardStep } from '../../services/wizard-state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  @Input() currentStep: WizardStep = 'campaign-details';

  constructor(private wizardState: WizardState) {}

  get currentIndex(): number {
    return this.wizardState['steps'].indexOf(this.currentStep);
  }
  
  
}
