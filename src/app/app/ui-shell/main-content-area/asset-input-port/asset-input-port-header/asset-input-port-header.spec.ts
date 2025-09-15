import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputPortHeader } from './asset-input-port-header';

describe('AssetInputPortHeader', () => {
  let component: AssetInputPortHeader;
  let fixture: ComponentFixture<AssetInputPortHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInputPortHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputPortHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
