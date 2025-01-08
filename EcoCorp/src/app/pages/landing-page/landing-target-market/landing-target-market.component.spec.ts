import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTargetMarketComponent } from './landing-target-market.component';

describe('LandingTargetMarketComponent', () => {
  let component: LandingTargetMarketComponent;
  let fixture: ComponentFixture<LandingTargetMarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingTargetMarketComponent]
    });
    fixture = TestBed.createComponent(LandingTargetMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
