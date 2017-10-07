import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { Flashlight } from '@ionic-native/flashlight';
import { CommonController } from '../../providers/CommonController';


@Component({
  selector: 'page-flash-light',
  templateUrl: 'flash-light.html'
})

export class FlashLightPage {
  //Used to determine whether the flashlight is currently on or off.
  isOn: boolean = false;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public commonCtrl: CommonController,
    public flashlight: Flashlight) {
  }

  async isAvailable(): Promise<boolean> {
    try {
      return await this.flashlight.available();
    }
    catch (e) {
      console.log(e);
    }
  }

  async toggleFlash(): Promise<void> {
    try {
      if (this.commonCtrl.isRunOnMobileDevice()) {
        let available = await this.isAvailable();
        if (available) {
          await this.flashlight.toggle();
          this.isOn = !this.isOn;
        } else {
          console.log("Not available.");
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

}
