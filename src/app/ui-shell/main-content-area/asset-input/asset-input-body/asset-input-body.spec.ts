import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputBody } from './asset-input-body';

describe('AssetInputBody', () => {
  let component: AssetInputBody;
  let fixture: ComponentFixture<AssetInputBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInputBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
