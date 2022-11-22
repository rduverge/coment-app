import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComentComponent } from './view-coment.component';

describe('ViewComentComponent', () => {
  let component: ViewComentComponent;
  let fixture: ComponentFixture<ViewComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
