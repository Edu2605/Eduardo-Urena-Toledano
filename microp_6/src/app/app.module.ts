import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { VuelosPage } from '../pages/vuelos/vuelos';
import { ReservasPage } from '../pages/reservas/reservas';
import { TarjetasEmbarquePage } from '../pages/tarjetas-embarque/tarjetas-embarque';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ReservaService} from '../services/reserva.service'
import { Services } from '@angular/core/src/view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcercaDePage,
    VuelosPage,
    ReservasPage,
    TarjetasEmbarquePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcercaDePage,
    VuelosPage,
    ReservasPage,
    TarjetasEmbarquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReservaService
  ]
})
export class AppModule {}
