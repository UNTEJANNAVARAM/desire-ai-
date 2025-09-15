import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Child imports
import { AssetViewportHeader } from './asset-viewport-header/asset-viewport-header';
import { AssetViewportBody } from './asset-viewport-body/asset-viewport-body';

@Component({
  selector: 'app-asset-viewport',
  standalone: true,
  imports: [
    CommonModule,
    AssetViewportHeader,
    AssetViewportBody
  ],
  templateUrl: './asset-viewport.html',
  styleUrls: ['./asset-viewport.scss']
})
export class AssetViewport {}
