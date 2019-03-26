import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReservasPage } from '../reservas/reservas';

/**
 * Generated class for the VuelosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vuelos',
  templateUrl: 'vuelos.html',
})

@Injectable()
export class VuelosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VuelosPage');
  }

}
