import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FikiComponent } from './fiki.component';

describe('FikiComponent', () => {
  let component: FikiComponent;
  let fixture: ComponentFixture<FikiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FikiComponent]
    });
    fixture = TestBed.createComponent(FikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
