import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignInputViewportHeader } from './campaign-input-viewport-header';

describe('CampaignInputViewportHeader', () => {
  let component: CampaignInputViewportHeader;
  let fixture: ComponentFixture<CampaignInputViewportHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignInputViewportHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignInputViewportHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
