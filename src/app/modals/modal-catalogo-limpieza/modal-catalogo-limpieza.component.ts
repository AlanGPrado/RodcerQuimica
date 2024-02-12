import { Component, Inject, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-modal-catalogo-limpieza',
  templateUrl: './modal-catalogo-limpieza.component.html',
  styleUrls: ['./modal-catalogo-limpieza.component.scss']
})
export class ModalCatalogoLimpiezaComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalCatalogoLimpiezaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer2
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  initLoadCompleted(pdf: PDFDocumentProxy): void {
    this.data.flag = false;
  }
}
