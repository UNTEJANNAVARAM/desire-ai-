import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInput } from './asset-input';

describe('AssetInput', () => {
  let component: AssetInput;
  let fixture: ComponentFixture<AssetInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
