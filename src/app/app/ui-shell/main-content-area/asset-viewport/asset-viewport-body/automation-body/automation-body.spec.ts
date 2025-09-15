import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationBody } from './automation-body';

describe('AutomationBody', () => {
  let component: AutomationBody;
  let fixture: ComponentFixture<AutomationBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
