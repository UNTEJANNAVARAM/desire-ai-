import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignInputViewport } from './campaign-input-viewport';

describe('CampaignInputViewport', () => {
  let component: CampaignInputViewport;
  let fixture: ComponentFixture<CampaignInputViewport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignInputViewport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignInputViewport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
