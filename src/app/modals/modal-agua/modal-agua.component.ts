import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agua',
  templateUrl: './modal-agua.component.html',
  styleUrls: ['./modal-agua.component.scss']
})
export class ModalAguaComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalAguaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
