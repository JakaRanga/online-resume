import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageBlockComponent } from './language-block.component';

describe('LanguageBlockComponent', () => {
  let component: LanguageBlockComponent;
  let fixture: ComponentFixture<LanguageBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
