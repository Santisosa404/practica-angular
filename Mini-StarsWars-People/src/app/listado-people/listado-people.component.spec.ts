import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeopleComponent } from './listado-people.component';

describe('ListadoPeopleComponent', () => {
  let component: ListadoPeopleComponent;
  let fixture: ComponentFixture<ListadoPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
