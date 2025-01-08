import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperiencePageComponent } from './user-experience-page.component';

describe('UserExperiencePageComponent', () => {
  let component: UserExperiencePageComponent;
  let fixture: ComponentFixture<UserExperiencePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserExperiencePageComponent]
    });
    fixture = TestBed.createComponent(UserExperiencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
