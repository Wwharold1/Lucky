import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLibrosAddComponent } from './app-libros-add.component';

describe('AppLibrosAddComponent', () => {
  let component: AppLibrosAddComponent;
  let fixture: ComponentFixture<AppLibrosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLibrosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLibrosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
