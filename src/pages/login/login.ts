import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';

import { CommonController } from '../../providers/CommonController';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  public loginData = {
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public angfireAuthCtrl: AngularFireAuth,
    public commonCtrl: CommonController) {
  }

  login() {
    if (this.commonCtrl.hasConnection()) {
      this.angfireAuthCtrl.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password).then(auth => {
        // Do custom things with auth
        console.log(auth);
      }).catch(err => {
        this.commonCtrl.showToast(err.message, "bottom", 3000, true, "Ok", true);
      });
    } else {
      this.commonCtrl.showToast("No Internet Connection.", "bottom", 3000, true, "Ok", true);
    }
  }

  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }

}
