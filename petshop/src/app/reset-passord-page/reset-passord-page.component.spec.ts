import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassordPageComponent } from './reset-passord-page.component';

describe('ResetPassordPageComponent', () => {
  let component: ResetPassordPageComponent;
  let fixture: ComponentFixture<ResetPassordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPassordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPassordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
