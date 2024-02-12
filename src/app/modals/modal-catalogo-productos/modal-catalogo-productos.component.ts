import { Component, Inject, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-modal-catalogo-productos',
  templateUrl: './modal-catalogo-productos.component.html',
  styleUrls: ['./modal-catalogo-productos.component.scss']
})
export class ModalCatalogoProductosComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalCatalogoProductosComponent>,
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
