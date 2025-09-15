import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputPortBody } from './asset-input-port-body';

describe('AssetInputPortBody', () => {
  let component: AssetInputPortBody;
  let fixture: ComponentFixture<AssetInputPortBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInputPortBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputPortBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
