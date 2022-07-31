import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeMobileComponent } from './resume-mobile.component';

describe('ResumeMobileComponent', () => {
  let component: ResumeMobileComponent;
  let fixture: ComponentFixture<ResumeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
