import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframesPageComponent } from './wireframes-page.component';

describe('WireframesPageComponent', () => {
  let component: WireframesPageComponent;
  let fixture: ComponentFixture<WireframesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WireframesPageComponent]
    });
    fixture = TestBed.createComponent(WireframesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
