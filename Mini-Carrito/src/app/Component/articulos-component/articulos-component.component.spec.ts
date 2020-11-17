import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosComponentComponent } from './articulos-component.component';

describe('ArticulosComponentComponent', () => {
  let component: ArticulosComponentComponent;
  let fixture: ComponentFixture<ArticulosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
