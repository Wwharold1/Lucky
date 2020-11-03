import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLibrosContentComponent } from './app-libros-content.component';

describe('AppLibrosContentComponent', () => {
  let component: AppLibrosContentComponent;
  let fixture: ComponentFixture<AppLibrosContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLibrosContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLibrosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
