import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SALAS } from '../../model/mock-salas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  ngOnInit(): void {
    console.log(this.salas);
 //   throw new Error("Method not implemented.");

  }

  salas = SALAS;
  

  constructor(public navCtrl: NavController) {

  }

}
