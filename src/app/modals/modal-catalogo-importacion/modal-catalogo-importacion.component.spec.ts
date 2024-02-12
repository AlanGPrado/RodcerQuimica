import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCatalogoImportacionComponent } from './modal-catalogo-importacion.component';

describe('ModalCatalogoImportacionComponent', () => {
  let component: ModalCatalogoImportacionComponent;
  let fixture: ComponentFixture<ModalCatalogoImportacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCatalogoImportacionComponent]
    });
    fixture = TestBed.createComponent(ModalCatalogoImportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
