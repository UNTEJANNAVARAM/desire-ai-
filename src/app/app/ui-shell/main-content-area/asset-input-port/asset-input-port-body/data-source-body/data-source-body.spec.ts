import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceBody } from './data-source-body';

describe('DataSourceBody', () => {
  let component: DataSourceBody;
  let fixture: ComponentFixture<DataSourceBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourceBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSourceBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
