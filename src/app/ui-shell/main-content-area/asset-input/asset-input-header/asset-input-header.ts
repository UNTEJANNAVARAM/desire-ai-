import { Component } from '@angular/core';
import { WizardState } from '../../../../services/wizard-state';

@Component({
  selector: 'app-asset-input-header',
  imports: [],
  templateUrl: './asset-input-header.html',
  styleUrl: './asset-input-header.scss'
})
export class AssetInputHeader {
  constructor(public wizard: WizardState) {} 
}
