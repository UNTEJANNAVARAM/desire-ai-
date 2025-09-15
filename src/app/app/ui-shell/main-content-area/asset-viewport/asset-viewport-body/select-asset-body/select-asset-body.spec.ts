import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAssetBody } from './select-asset-body';

describe('SelectAssetBody', () => {
  let component: SelectAssetBody;
  let fixture: ComponentFixture<SelectAssetBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAssetBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAssetBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
