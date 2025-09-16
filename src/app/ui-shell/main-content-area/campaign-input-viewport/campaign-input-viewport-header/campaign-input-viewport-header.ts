import { Component } from '@angular/core';
import { WizardState } from '../../../../services/wizard-state';

@Component({
  selector: 'app-campaign-input-viewport-header',
  imports: [],
  templateUrl: './campaign-input-viewport-header.html',
  styleUrl: './campaign-input-viewport-header.scss'
})
export class CampaignInputViewportHeader {
  
    constructor(public wizard: WizardState) {}
}
