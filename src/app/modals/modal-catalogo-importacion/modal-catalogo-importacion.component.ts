import { Component, Inject, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-modal-catalogo-importacion',
  templateUrl: './modal-catalogo-importacion.component.html',
  styleUrls: ['./modal-catalogo-importacion.component.scss']
})
export class ModalCatalogoImportacionComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalCatalogoImportacionComponent>,
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
