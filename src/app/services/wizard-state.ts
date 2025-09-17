import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type WizardStep =
  | 'campaign-details'
  | 'select-theme'
  | 'select-asset'
  | 'automation'
  | 'asset-details'
  | 'data-source';

@Injectable({
  providedIn: 'root'
})
export class WizardState {
  steps: WizardStep[] = [
    'campaign-details',
    'select-theme',
    'select-asset',
    'automation',
    'asset-details',
    'data-source'
  ];

  private currentStepSubject = new BehaviorSubject<WizardStep>('campaign-details');
  currentStep$ = this.currentStepSubject.asObservable();

  // Track which steps are valid
  private stepValidity: Record<WizardStep, boolean> = {
    'campaign-details': false,
    'select-theme': false,
    'select-asset': false,
    'automation': false,
    'asset-details': false,
    'data-source': false
  };

  get currentStep(): WizardStep {
    return this.currentStepSubject.value;
  }

  setStepValid(step: WizardStep, valid: boolean) {
    this.stepValidity[step] = valid;
  }

  goNext(): void {
    const idx = this.steps.indexOf(this.currentStep);
    if (idx < this.steps.length - 1 && this.stepValidity[this.currentStep]) {
      this.currentStepSubject.next(this.steps[idx + 1]);
    }
  }

  goBack(): void {
    const idx = this.steps.indexOf(this.currentStep);
    if (idx > 0) {
      this.currentStepSubject.next(this.steps[idx - 1]);
    }
  }
}
