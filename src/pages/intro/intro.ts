import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  constructor(private navCtrl: NavController, private storage: Storage) {

  }

  continue() {
    this.storage.set('dismissedIntro', true);
    this.navCtrl.push(TabsPage);
  }
}
