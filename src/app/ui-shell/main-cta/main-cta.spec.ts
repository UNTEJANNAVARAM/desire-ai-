import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCta } from './main-cta';

describe('MainCta', () => {
  let component: MainCta;
  let fixture: ComponentFixture<MainCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
