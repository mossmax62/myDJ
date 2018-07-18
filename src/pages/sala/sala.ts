import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PEDIDOS } from '../../model/mock-pedidos';


/**
 * Generated class for the SalaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {
  
  image='assets/imgs/chat1.jpeg';
  pedidos = PEDIDOS;
  sala={nombre:'METAL', nombreDJ:'Dero DJ'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaPage');
  }

}
