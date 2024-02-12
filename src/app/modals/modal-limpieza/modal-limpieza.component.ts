import { Component, Inject, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-limpieza',
  templateUrl: './modal-limpieza.component.html',
  styleUrls: ['./modal-limpieza.component.scss']
})
export class ModalLimpiezaComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalLimpiezaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer2
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
    this.renderer.removeClass(document.body, 'no-scroll');
  }

}
