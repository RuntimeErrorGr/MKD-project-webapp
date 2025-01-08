import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolutionPageComponent } from './problem-solution-page.component';

describe('ProblemSolutionPageComponent', () => {
  let component: ProblemSolutionPageComponent;
  let fixture: ComponentFixture<ProblemSolutionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemSolutionPageComponent]
    });
    fixture = TestBed.createComponent(ProblemSolutionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
