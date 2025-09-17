import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WizardState, WizardStep } from '../../services/wizard-state';

@Component({
  selector: 'app-main-cta',
  imports: [MatIconModule, MatButtonModule, CommonModule, NgIf],
  templateUrl: './main-cta.html',
  styleUrl: './main-cta.scss'
})
export class MainCta {
  constructor(public wizard: WizardState) {}

  get isCurrentStepValid(): boolean {
    return this.wizard['stepValidity'][this.wizard.currentStep];
  }

  goNext() {
    this.wizard.goNext();
  }

  goBack() {
    this.wizard.goBack();
  }
}
