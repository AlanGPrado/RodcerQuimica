import { Component, Inject, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agua',
  templateUrl: './modal-agua.component.html',
  styleUrls: ['./modal-agua.component.scss']
})
export class ModalAguaComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalAguaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer2
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
    this.renderer.removeClass(document.body, 'no-scroll');
  }

}
