import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCatalogoProductosComponent } from './modal-catalogo-productos.component';

describe('ModalCatalogoProductosComponent', () => {
  let component: ModalCatalogoProductosComponent;
  let fixture: ComponentFixture<ModalCatalogoProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCatalogoProductosComponent]
    });
    fixture = TestBed.createComponent(ModalCatalogoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
