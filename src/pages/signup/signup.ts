import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { CommonController } from '../../providers/CommonController';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {
  public signupData = {
    email: '',
    password: '',
    passwordRetyped: ''
  };

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public commonCtrl: CommonController) {
    if (this.navParams != null && this.navParams.data != "") {
      if (this.navParams.data.email != null && this.navParams.data.email != "") {
        this.signupData.email = this.navParams.get('email');
      }
    }
  }

  signup() {
    if (this.signupData.password !== this.signupData.passwordRetyped) {
      this.commonCtrl.showAlertMsg("Error", "Your password and your re-entered password does not match each other.");
      return;
    }

    if (this.commonCtrl.hasConnection()) {
      // Firebase Signup Code
      this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password).then(auth => {
        // Could do something with the Auth-Response
        console.log(auth);
      }).catch(err => {
        this.commonCtrl.showAlertMsg("Error", err.message);
      });
    } else {
      this.commonCtrl.showToast("No Internet Connection.", "bottom", 3000, true, "Ok", true);
    }
  }

}
