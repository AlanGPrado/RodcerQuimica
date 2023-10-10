import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { ModalLimpiezaComponent } from './modals/modal-limpieza/modal-limpieza.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAguaComponent } from './modals/modal-agua/modal-agua.component';
import { ModalMateriaComponent } from './modals/modal-materia/modal-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    HeaderComponent,
    FooterComponent,
    ModalLimpiezaComponent,
    ModalAguaComponent,
    ModalMateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
