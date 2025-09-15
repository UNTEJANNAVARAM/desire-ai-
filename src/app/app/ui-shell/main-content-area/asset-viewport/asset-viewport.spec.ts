import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetViewport } from './asset-viewport';

describe('AssetViewport', () => {
  let component: AssetViewport;
  let fixture: ComponentFixture<AssetViewport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetViewport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetViewport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
