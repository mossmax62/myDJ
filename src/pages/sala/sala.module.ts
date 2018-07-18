import { NgModule, OnInit } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaPage } from './sala';

@NgModule({
  declarations: [
    SalaPage,
  ],
  imports: [
    IonicPageModule.forChild(SalaPage),
  ],
})
export class SalaPageModule implements OnInit {


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  

}
