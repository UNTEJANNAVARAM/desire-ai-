import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectThemeBody } from './select-theme-body';

describe('SelectThemeBody', () => {
  let component: SelectThemeBody;
  let fixture: ComponentFixture<SelectThemeBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectThemeBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectThemeBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
