import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Child imports
import { CampaignInputViewport } from './campaign-input-viewport/campaign-input-viewport';
import { AssetViewport } from './asset-viewport/asset-viewport';
import { AssetInput } from './asset-input/asset-input';

@Component({
  selector: 'app-main-content-area',
  standalone: true,
  imports: [
    CommonModule,
    CampaignInputViewport,
    AssetViewport,
    AssetInput
  ],
  templateUrl: './main-content-area.html',
  styleUrls: ['./main-content-area.scss']
})
export class MainContentArea {}
