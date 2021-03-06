import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-slide-box',
  templateUrl: 'slide-box.html'
})

export class SlideBoxPage {

  public slides: any = [{
    title: "Welcome to the Docs!",
    description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
    image: "assets/img/ica-slidebox-img-1.png",
  }, {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    }, {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }];

  constructor(public navCtrl: NavController,
    public storage: Storage,
    public afAuth: AngularFireAuth) {
  }

  openPage() {
    this.storage.set('isTutorialShow', false);

    this.afAuth.authState.subscribe(auth => {
      if (!auth)
        this.navCtrl.setRoot(LoginPage);
      else
        this.navCtrl.setRoot(HomePage);
    });
  }

}
