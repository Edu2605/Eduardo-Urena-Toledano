import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reserva } from '../../models/reserva.model';
import { ReservaService } from '../../services/reserva.service';

/**
 * Generated class for the ReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})

@Injectable()
export class ReservasPage {

  reservas: Reserva[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ReservaService:ReservaService) {
  }

  ionViewWillEnter(){
    this.reservas = this.ReservaService.getReserva();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasPage');
  }

  onAddReserva(value:{Origen_Destino:string,Fecha:string,Precio:string}){
     this.ReservaService.addReserva(value);
     this.navCtrl.pop();
     }
    

}
