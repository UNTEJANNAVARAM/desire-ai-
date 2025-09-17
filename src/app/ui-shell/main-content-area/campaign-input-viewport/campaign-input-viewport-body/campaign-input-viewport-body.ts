import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WizardState } from '../../../../services/wizard-state';
import { CommonModule, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-campaign-input-viewport-body',
  imports: [FormsModule, MatIconModule, NgIf, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, ReactiveFormsModule],
  templateUrl: './campaign-input-viewport-body.html',
  styleUrl: './campaign-input-viewport-body.scss'
})
export class CampaignInputViewportBody {
  
  constructor(public wizard: WizardState) {}

  selectedFileName: string | null = null;

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.selectedFileName = null;
  if (input.files && input.files[0]) {
    const file = input.files[0];
   this.selectedFileName = file.name; 
    // TODO: you can now send this file to backend / FormData etc.
  }
}


  verticals = ['Retail', 'Food', 'Tech', 'Fashion'];
  selectedVertical: string = '';
  selectedTemplate: number | null = null;

  templates = [
    { id: 1, title: 'Template 1', preview: '', colors: ['#FF5200', '#A23E1A', '#725C00'] },
    { id: 2, title: 'Template 2', preview: '', colors: ['#ffb59d', '#ff8b64', '#ff5711'] },
    { id: 3, title: 'Template 3', preview: '', colors: ['#998E8B', '#A08D87', '#FF5200'] }
  ];
}
