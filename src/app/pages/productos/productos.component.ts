import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLimpiezaComponent } from 'src/app/modals/modal-limpieza/modal-limpieza.component';
import { ModalAguaComponent } from 'src/app/modals/modal-agua/modal-agua.component';
import { ModalMateriaComponent } from 'src/app/modals/modal-materia/modal-materia.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  constructor(public dialog: MatDialog) { }

  openModalLimpieza(): void {
    const dialogRef = this.dialog.open(ModalLimpiezaComponent, {
      width: '400px',
      data: {
        title: 'My Modal Title',
        message: 'This is the modal message.'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Modal result: ${result}`);
    });
  }

  openModalAgua(): void {
    const dialogRef = this.dialog.open(ModalAguaComponent, {
      width: '400px',
      data: {
        title: 'My Modal Title',
        message: 'This is the modal message.'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Modal result: ${result}`);
    });
  }

  openModalMateria(): void {
    const dialogRef = this.dialog.open(ModalMateriaComponent, {
      width: '400px',
      data: {
        title: 'My Modal Title',
        message: 'This is the modal message.'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Modal result: ${result}`);
    });
  }

}
