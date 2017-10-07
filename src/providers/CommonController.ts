import { Injectable } from '@angular/core';
import { Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { Network } from '@ionic-native/network';

@Injectable()
export class CommonController {
  public API_URL_LIST = "https://randomuser.me/api/";

  // public API_PRODUCT_URL = "https://www.addtobuy.com/api/";
  public API_PRODUCT_URL = "http://a2b.172.104.57.92.nip.io/api/";

  public API_URL_UPLOADS = "http://192.168.1.97:8400";
  // public API_URL_UPLOADS = "http://a2b.172.104.57.92.nip.io/api/updateprofile";

  public loader;
  public toast;

  constructor(
    public platform: Platform,
    public network: Network,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {
  }

  showLoading(message) {
    this.loader = this.loadingCtrl.create({
      content: message
      // spinner: 'hide',
      // duration: 3000,
      // showBackdrop: true,
      // enableBackdropDismiss: true,
      // dismissOnPageChange: true
    });

    this.loader.onDidDismiss(() => {
      // console.log('Dismissed loading');
    });

    this.loader.present();
  }

  hideLoading() {
    this.loader.dismiss();
  }

  showToast(msg, position, duration, isShowCloseBtn, closeButtonText, hideOnPageChange) {
    if (isShowCloseBtn) {
      this.toast = this.toastCtrl.create({
        message: msg,
        position: position,
        duration: duration,
        showCloseButton: isShowCloseBtn,
        closeButtonText: closeButtonText,
        dismissOnPageChange: hideOnPageChange
      });
    } else {
      this.toast = this.toastCtrl.create({
        message: msg,
        position: position,
        duration: duration,
        dismissOnPageChange: hideOnPageChange
      });
    }

    this.toast.present();
  }

  showAlertMsg(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['Ok']
    });

    alert.present();
  }

  hideToast() {
    this.toast.dismiss();
  }

  isRunOnMobileDevice() {
    return this.platform.is('mobile') ? true : false;
  }

  hasConnection() {
    if (this.isRunOnMobileDevice()) {
      if (this.network.type == "unknown" || this.network.type == "none") {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}
