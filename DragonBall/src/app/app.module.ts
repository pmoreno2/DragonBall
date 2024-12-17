import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Configuración del locale
import { NgModule,LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
// Registrar el locale en español
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { CalendarioPageComponent } from './pages/calendario-page/calendario-page.component';
import { routes } from './app.routes';


// import { MAT_DATE_FORMATS } from '@angular/material/core';

// export const MY_DATE_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY', // Formato de entrada
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',  // Formato mostrado en el input
//     monthYearLabel: 'MMMM YYYY', // Etiqueta del mes y año
//     dateA11yLabel: 'LL',         // Accesibilidad
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterListPageComponent,
    CharacterDetailPageComponent,
    NotFoundComponent,
    CalendarioPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    //{ provide: LOCALE_ID, useValue: 'es-ES' } // Configurar el idioma a español
    { provide: LOCALE_ID, useValue: 'es-ES' },      // Configura el locale a español
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' } // Configura Angular Material
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}