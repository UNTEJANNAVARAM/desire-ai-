import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetailsBody } from './asset-details-body';

describe('AssetDetailsBody', () => {
  let component: AssetDetailsBody;
  let fixture: ComponentFixture<AssetDetailsBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetDetailsBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetDetailsBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
