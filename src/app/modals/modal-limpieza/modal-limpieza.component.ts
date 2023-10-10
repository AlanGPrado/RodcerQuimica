import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-limpieza',
  templateUrl: './modal-limpieza.component.html',
  styleUrls: ['./modal-limpieza.component.scss']
})
export class ModalLimpiezaComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalLimpiezaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
