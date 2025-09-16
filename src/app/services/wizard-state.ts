import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizardState {
  private currentStepSubject = new BehaviorSubject<number>(1);
  currentStep$ = this.currentStepSubject.asObservable();

  private totalSteps = 4; // 1,2,3 + tick(final)

  get currentStep(): number {
    return this.currentStepSubject.value;
  }

  goNext(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStepSubject.next(this.currentStep + 0.5);
    }
  }

  goBack(): void {
    if (this.currentStep > 1) {
      this.currentStepSubject.next(this.currentStep - 0.5);
    }
  }

}
