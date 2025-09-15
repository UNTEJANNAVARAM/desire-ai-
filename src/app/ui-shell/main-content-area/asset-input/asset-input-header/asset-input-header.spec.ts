import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputHeader } from './asset-input-header';

describe('AssetInputHeader', () => {
  let component: AssetInputHeader;
  let fixture: ComponentFixture<AssetInputHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInputHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
