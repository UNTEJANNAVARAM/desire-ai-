import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetViewportBody } from './asset-viewport-body';

describe('AssetViewportBody', () => {
  let component: AssetViewportBody;
  let fixture: ComponentFixture<AssetViewportBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetViewportBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetViewportBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
