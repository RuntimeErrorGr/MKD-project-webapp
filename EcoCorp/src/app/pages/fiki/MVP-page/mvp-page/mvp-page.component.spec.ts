import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVPPageComponent } from './mvp-page.component';

describe('MVPPageComponent', () => {
  let component: MVPPageComponent;
  let fixture: ComponentFixture<MVPPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MVPPageComponent]
    });
    fixture = TestBed.createComponent(MVPPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
