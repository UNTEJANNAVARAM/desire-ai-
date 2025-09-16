import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-cta',
  imports: [MatIconModule, MatButtonModule, CommonModule, NgIf],
  templateUrl: './main-cta.html',
  styleUrl: './main-cta.scss'
})
export class MainCta {
  @Input() currentStep: number = 1;
  @Input() canProceed: boolean = false;

  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  goNext() {
    console.log('Next clicked → currentStep:', this.currentStep+0.5);
    this.next.emit();
  }

  goBack() {
    console.log('Back clicked → currentStep:', this.currentStep-0.5);
    this.back.emit();
  }
  
}
