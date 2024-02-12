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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSelectModule } from '@angular/material/select';
import { ModalCatalogoProductosComponent } from './modals/modal-catalogo-productos/modal-catalogo-productos.component';
import { ModalCatalogoLimpiezaComponent } from './modals/modal-catalogo-limpieza/modal-catalogo-limpieza.component';
import { ModalCatalogoImportacionComponent } from './modals/modal-catalogo-importacion/modal-catalogo-importacion.component'; // Import MatSelectModule
import { PdfViewerModule } from 'ng2-pdf-viewer';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translate/', '.json');
}

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
    ModalMateriaComponent,
    ModalCatalogoProductosComponent,
    ModalCatalogoLimpiezaComponent,
    ModalCatalogoImportacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    PdfViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    // Set the default language
    this.translate.setDefaultLang('es'); // Change 'en' to the language code you want as the default.
    this.translate.use('es'); // Optionally set the active language to 'en' here as well.
  }
 }
