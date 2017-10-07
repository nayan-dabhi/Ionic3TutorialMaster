import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert';
import { ButtonPage } from '../pages/buttons/button';
import { FormInputsPage } from '../pages/form-inputs/form-inputs';
import { CheckBoxPage } from '../pages/checkbox/checkbox';
import { SelectBoxPage } from '../pages/select-box/select-box';
import { RangePage } from '../pages/form-inputs/range/range';
import { ListPage } from '../pages/list/list';
import { SegmentPage } from '../pages/segment/segment';
import { SlideBoxPage } from '../pages/slide-box/slide-box';
import { ModalPage } from '../pages/modal/modal';
import { PopoverPage } from '../pages/popover/popover';
import { ImageProcessingPage } from '../pages/image-processing/image-processing';
import { FileProcessPage } from '../pages/file-process/file-process';
import { PdfProcessPage } from '../pages/pdf-process/pdf-process';
import { HorizontalScrollPage } from '../pages/horizontal-scroll/horizontal-scroll';
import { FlashLightPage } from '../pages/flash-light/flash-light';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

import { CommonController } from '../providers/CommonController';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public afAuth: AngularFireAuth,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    public commonCtrl: CommonController) {
    // used for an example of ngFor and navigation
    this.initializeApp();

    this.pages = [
      { title: 'Bedges', component: HomePage },
      { title: 'Alert', component: AlertPage },
      { title: 'Button', component: ButtonPage },
      { title: 'Form Inputs', component: FormInputsPage },
      { title: 'Check Box', component: CheckBoxPage },
      { title: 'Select Box', component: SelectBoxPage },
      { title: 'Range', component: RangePage },
      { title: 'List', component: ListPage },
      { title: 'Segment', component: SegmentPage },
      { title: 'Slide Box', component: SlideBoxPage },
      { title: 'Modal', component: ModalPage },
      { title: 'Popover', component: PopoverPage },
      { title: 'Image Processing', component: ImageProcessingPage },
      { title: 'File Processing', component: FileProcessPage },
      { title: 'PDF Read', component: PdfProcessPage },
      { title: 'Horizontal Scroll Page', component: HorizontalScrollPage },
      { title: 'FlashLight Page', component: FlashLightPage }
    ];

    this.checkPageRedirection();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.statusBar.backgroundColorByHexString('#3949AB');

      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  checkPageRedirection() {
    this.storage.get('isTutorialShow').then((value) => {
      if (value != null && !value) {
        this.afAuth.authState.subscribe(auth => {
          if (!auth)
            this.rootPage = LoginPage;
          else
            this.rootPage = HomePage;
        });
      } else {
        this.rootPage = SlideBoxPage;
      }
    });
  }

  signOut() {
    if (this.commonCtrl.hasConnection()) {
      this.afAuth.auth.signOut();
    } else {
      this.commonCtrl.showToast("No Internet Connection.", "bottom", 3000, true, "Ok", true);
    }
  }

}
