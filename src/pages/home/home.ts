import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private faio: FingerprintAIO) {
  }

  login() {
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only Android
      localizedFallbackTitle: 'Use Pin', // Only iOS
      localizedReason: 'กรุณายืนยันตัวตนของท่าน' // Only iOS
    })
      .then((result: any) => { // ถ้าลายนิ้วมือถูกต้อง
        this.navCtrl.setRoot(WelcomePage); // ไปหน้า WelcomePage
      })
      .catch((error: any) => {
        console.log('err: ', error);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
