import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLimpiezaComponent } from './modal-limpieza.component';

describe('ModalLimpiezaComponent', () => {
  let component: ModalLimpiezaComponent;
  let fixture: ComponentFixture<ModalLimpiezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLimpiezaComponent]
    });
    fixture = TestBed.createComponent(ModalLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
