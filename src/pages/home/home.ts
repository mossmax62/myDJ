import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SALAS } from '../../app/model/mock-salas';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  ngOnInit(): void {
    console.log(this.salas);
 //   throw new Error("Method not implemented.");

      this.nativeAudio.preloadSimple('backgroundMP3', '../assets/mp3/0378.mp3').then(function(response){console.log(response)}, function(response){console.log(response)});;
      this.nativeAudio.loop('backgroundMP3').then(function(response){console.log(response)}, function(response){console.log(response)});;

      console.log("playing");
  }

  salas = SALAS;
    
  

  constructor(public navCtrl: NavController,private nativeAudio: NativeAudio) {

  }

}
