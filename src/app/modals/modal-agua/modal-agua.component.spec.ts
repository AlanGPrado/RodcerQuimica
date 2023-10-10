import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAguaComponent } from './modal-agua.component';

describe('ModalAguaComponent', () => {
  let component: ModalAguaComponent;
  let fixture: ComponentFixture<ModalAguaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAguaComponent]
    });
    fixture = TestBed.createComponent(ModalAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
