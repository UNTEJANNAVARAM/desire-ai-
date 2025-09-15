import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetViewportHeader } from './asset-viewport-header';

describe('AssetViewportHeader', () => {
  let component: AssetViewportHeader;
  let fixture: ComponentFixture<AssetViewportHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetViewportHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetViewportHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
