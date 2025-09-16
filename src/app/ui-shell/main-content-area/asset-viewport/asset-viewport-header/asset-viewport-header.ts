import { Component } from '@angular/core';
import { WizardState } from '../../../../services/wizard-state';

@Component({
  selector: 'app-asset-viewport-header',
  imports: [],
  templateUrl: './asset-viewport-header.html',
  styleUrl: './asset-viewport-header.scss'
})
export class AssetViewportHeader {
  constructor(public wizard: WizardState) {} 
}
