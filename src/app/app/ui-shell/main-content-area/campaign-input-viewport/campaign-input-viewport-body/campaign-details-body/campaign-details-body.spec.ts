import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailsBody } from './campaign-details-body';

describe('CampaignDetailsBody', () => {
  let component: CampaignDetailsBody;
  let fixture: ComponentFixture<CampaignDetailsBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignDetailsBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignDetailsBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
