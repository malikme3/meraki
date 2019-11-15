import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildOneComponent } from './app-child-one.component';

describe('AppChildOneComponent', () => {
  let component: AppChildOneComponent;
  let fixture: ComponentFixture<AppChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
