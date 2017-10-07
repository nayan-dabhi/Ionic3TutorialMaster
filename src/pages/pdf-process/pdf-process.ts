import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CommonController } from '../../providers/CommonController';

@Component({
  templateUrl: 'pdf-process.html'
})

export class PdfProcessPage {
  constructor (public navCtrl: NavController,
    public commonCtrl: CommonController) {
  }

  checkInternet() {
    console.log(this.commonCtrl.hasConnection());
  }
}
