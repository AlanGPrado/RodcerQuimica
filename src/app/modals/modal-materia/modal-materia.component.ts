import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-materia',
  templateUrl: './modal-materia.component.html',
  styleUrls: ['./modal-materia.component.scss']
})
export class ModalMateriaComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
