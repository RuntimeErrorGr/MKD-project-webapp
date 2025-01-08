import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFunctionsComponent } from './secondary-functions.component';

describe('SecondaryFunctionsComponent', () => {
  let component: SecondaryFunctionsComponent;
  let fixture: ComponentFixture<SecondaryFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryFunctionsComponent]
    });
    fixture = TestBed.createComponent(SecondaryFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
