import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPrimaryFunctionsComponent } from './landing-primary-functions.component';

describe('LandingPrimaryFunctionsComponent', () => {
  let component: LandingPrimaryFunctionsComponent;
  let fixture: ComponentFixture<LandingPrimaryFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPrimaryFunctionsComponent]
    });
    fixture = TestBed.createComponent(LandingPrimaryFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
