import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketResearchPageComponent } from './market-research-page.component';

describe('MarketResearchPageComponent', () => {
  let component: MarketResearchPageComponent;
  let fixture: ComponentFixture<MarketResearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketResearchPageComponent]
    });
    fixture = TestBed.createComponent(MarketResearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
