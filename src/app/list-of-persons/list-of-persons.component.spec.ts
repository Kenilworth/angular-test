import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPersonsComponent } from './list-of-persons.component';

describe('ListOfPersonsComponent', () => {
  let component: ListOfPersonsComponent;
  let fixture: ComponentFixture<ListOfPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
