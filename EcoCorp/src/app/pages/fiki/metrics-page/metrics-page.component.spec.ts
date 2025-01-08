import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsPageComponent } from './metrics-page.component';

describe('MetricsPageComponent', () => {
  let component: MetricsPageComponent;
  let fixture: ComponentFixture<MetricsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetricsPageComponent]
    });
    fixture = TestBed.createComponent(MetricsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
