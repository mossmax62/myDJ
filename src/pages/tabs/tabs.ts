import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SalaPage } from '../sala/sala';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SalaPage;
  tab3Root = ContactPage;

  constructor(public smartAudio: SmartAudio) {

  }

  changeTab() {
    this.smartAudio.nativeAudio.play('tabSwitch');
    console.log("playing");

}
}
