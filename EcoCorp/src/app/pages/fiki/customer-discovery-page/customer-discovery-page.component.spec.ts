import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDiscoveryPageComponent } from './customer-discovery-page.component';

describe('InterviewPageComponent', () => {
  let component: CustomerDiscoveryPageComponent;
  let fixture: ComponentFixture<CustomerDiscoveryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDiscoveryPageComponent]
    });
    fixture = TestBed.createComponent(CustomerDiscoveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
