import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VuelosPage } from '../vuelos/vuelos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  buscarVuelos(){
    this.navCtrl.push(VuelosPage)
  }

}
