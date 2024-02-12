import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCatalogoLimpiezaComponent } from './modal-catalogo-limpieza.component';

describe('ModalCatalogoLimpiezaComponent', () => {
  let component: ModalCatalogoLimpiezaComponent;
  let fixture: ComponentFixture<ModalCatalogoLimpiezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCatalogoLimpiezaComponent]
    });
    fixture = TestBed.createComponent(ModalCatalogoLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
