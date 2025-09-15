import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignInputViewportBody } from './campaign-input-viewport-body';

describe('CampaignInputViewportBody', () => {
  let component: CampaignInputViewportBody;
  let fixture: ComponentFixture<CampaignInputViewportBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignInputViewportBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignInputViewportBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
