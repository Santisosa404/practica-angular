import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArticulosComponentComponent } from './lista-articulos-component.component';

describe('ListaArticulosComponentComponent', () => {
  let component: ListaArticulosComponentComponent;
  let fixture: ComponentFixture<ListaArticulosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArticulosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArticulosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
