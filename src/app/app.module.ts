import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SexPipe } from './shared/pipe/sex.pipe';
// importação do módulo de importação
import { PoI18nModule } from '@portinari/portinari-ui';
import { PoI18nConfig } from '@portinari/portinari-ui';
import { generalPt } from './shared/literals/i18n/general-Pt';
import { generalEn } from './shared/literals/i18n/general-en';
import { generalEs } from './shared/literals/i18n/general-es';


const i18nConfig: PoI18nConfig = {
  default: {
    language: localStorage.getItem('user.language') || navigator.language,
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn,
      es: generalEs
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SexPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    FormsModule,
    PoI18nModule.config(i18nConfig),
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
