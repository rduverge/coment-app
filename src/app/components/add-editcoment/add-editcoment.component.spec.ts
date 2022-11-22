import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcomentComponent } from './add-editcoment.component';

describe('AddEditcomentComponent', () => {
  let component: AddEditcomentComponent;
  let fixture: ComponentFixture<AddEditcomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditcomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditcomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
