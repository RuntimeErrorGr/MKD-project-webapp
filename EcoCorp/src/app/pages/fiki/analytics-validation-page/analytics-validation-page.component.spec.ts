import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsValidationPageComponent } from './analytics-validation-page.component';

describe('ValidationPageComponent', () => {
  let component: AnalyticsValidationPageComponent;
  let fixture: ComponentFixture<AnalyticsValidationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsValidationPageComponent]
    });
    fixture = TestBed.createComponent(AnalyticsValidationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
