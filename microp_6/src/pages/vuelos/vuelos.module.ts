import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VuelosPage } from './vuelos';

@NgModule({
  declarations: [
    VuelosPage,
  ],
  imports: [
    IonicPageModule.forChild(VuelosPage),
  ],
})
export class VuelosPageModule {}
