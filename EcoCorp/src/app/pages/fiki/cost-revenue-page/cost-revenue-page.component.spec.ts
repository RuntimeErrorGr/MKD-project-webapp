import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostRevenuePageComponent } from './cost-revenue-page.component';

describe('CostRevenuePageComponent', () => {
  let component: CostRevenuePageComponent;
  let fixture: ComponentFixture<CostRevenuePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostRevenuePageComponent]
    });
    fixture = TestBed.createComponent(CostRevenuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
