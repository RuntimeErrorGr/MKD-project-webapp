import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProblemSolutionComponent } from './landing-problem-solution.component';

describe('LandingProblemSolutionComponent', () => {
  let component: LandingProblemSolutionComponent;
  let fixture: ComponentFixture<LandingProblemSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingProblemSolutionComponent]
    });
    fixture = TestBed.createComponent(LandingProblemSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
