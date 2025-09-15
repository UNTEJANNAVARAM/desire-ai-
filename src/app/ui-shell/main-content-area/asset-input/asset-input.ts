import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Child imports
import { AssetInputHeader } from './asset-input-header/asset-input-header';
import { AssetInputBody } from './asset-input-body/asset-input-body';

@Component({
  selector: 'app-asset-input',
  standalone: true,
  imports: [
    CommonModule,
    AssetInputHeader,
    AssetInputBody
  ],
  templateUrl: './asset-input.html',
  styleUrls: ['./asset-input.scss']
})
export class AssetInput {}
