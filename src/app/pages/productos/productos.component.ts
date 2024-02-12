import { Component, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLimpiezaComponent } from 'src/app/modals/modal-limpieza/modal-limpieza.component';
import { ModalAguaComponent } from 'src/app/modals/modal-agua/modal-agua.component';
import { ModalMateriaComponent } from 'src/app/modals/modal-materia/modal-materia.component';
import { ModalCatalogoProductosComponent } from 'src/app/modals/modal-catalogo-productos/modal-catalogo-productos.component';
import { ModalCatalogoLimpiezaComponent } from 'src/app/modals/modal-catalogo-limpieza/modal-catalogo-limpieza.component';
import { ModalCatalogoImportacionComponent } from 'src/app/modals/modal-catalogo-importacion/modal-catalogo-importacion.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  constructor(
    public dialog: MatDialog,
    private renderer: Renderer2) { }

  openModalLimpieza(): void {
    const dialogRef = this.dialog.open(ModalLimpiezaComponent, {
      width: '400px',
      data: {
        title: 'My Modal Title',
        message: 'This is the modal message.'
      },
    });
    this.renderer.addClass(document.body, 'no-scroll');

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
    this.renderer.addClass(document.body, 'no-scroll');

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
    this.renderer.addClass(document.body, 'no-scroll');

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Modal result: ${result}`);
    });
  }

  openModalCatalogoProductos(): void {
    const dialogRef = this.dialog.open(ModalCatalogoProductosComponent, {
      width: '400px',
      data: {
        title: 'My Modal Title',
        message: 'This is the modal message.',
        flag: true
      },
    });
    this.renderer.addClass(document.body, 'no-scroll');

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Modal result: ${result}`);
    });
  }

  openModalCatalogoLimpieza(): void {
    const dialogRef = this.dialog.open(ModalCatalogoLimpiezaComponent, {
      width: '400px',
      data: {
        title: 'My Modal Title',
        message: 'This is the modal message.',
        flag: true
      },
    });
    this.renderer.addClass(document.body, 'no-scroll');

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Modal result: ${result}`);
    });
  }

  openModalCatalogoImportacion(): void {
    const dialogRef = this.dialog.open(ModalCatalogoImportacionComponent, {
      width: '400px',
      data: {
        title: 'My Modal Title',
        message: 'This is the modal message.',
        flag: true
      },
    });
    this.renderer.addClass(document.body, 'no-scroll');

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Modal result: ${result}`);
    });
  }

}
