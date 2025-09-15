import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Child imports
import { CampaignInputViewportHeader } from './campaign-input-viewport-header/campaign-input-viewport-header';
import { CampaignInputViewportBody } from './campaign-input-viewport-body/campaign-input-viewport-body';

@Component({
  selector: 'app-campaign-input-viewport',
  standalone: true,
  imports: [
    CommonModule,
    CampaignInputViewportHeader,
    CampaignInputViewportBody
  ],
  templateUrl: './campaign-input-viewport.html',
  styleUrls: ['./campaign-input-viewport.scss']
})
export class CampaignInputViewport {}
