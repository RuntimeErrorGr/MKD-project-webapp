import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAdvantagesComponent } from './landing-advantages.component'

describe('', () => {
  let component: LandingAdvantagesComponent;
  let fixture: ComponentFixture<LandingAdvantagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingAdvantagesComponent]
    });
    fixture = TestBed.createComponent(LandingAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
