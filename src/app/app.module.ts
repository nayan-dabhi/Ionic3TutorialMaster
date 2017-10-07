import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

// Native Plugins
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FileChooser } from '@ionic-native/file-chooser';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Flashlight } from '@ionic-native/flashlight';

// providers
import { CommonController } from '../providers/CommonController';
import { PersonListProvider } from '../providers/person-list/person-list';

// Modules
import { ImageProcessingPageModule } from '../pages/image-processing/image-processing.module';

// Components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { AlertPage } from '../pages/alert/alert';
import { CheckBoxPage } from '../pages/checkbox/checkbox';
import { FormInputsPage } from '../pages/form-inputs/form-inputs';
import { RangePage } from '../pages/form-inputs/range/range';

import { ButtonPage } from '../pages/buttons/button';
import { BasicButtonPage } from '../pages/buttons/basic-button/basic-button';
import { IconsButtonPage } from '../pages/buttons/icons-button/icons-button';
import { ButtonComponentsPage } from '../pages/buttons/button-components/button-components';

import { ListPage } from '../pages/list/list';
import { StaticListPage } from '../pages/list/static-list/static-list';
import { ListHttpPage } from '../pages/list/list-http/list-http';
import { ListItemDetailPage } from '../pages/list/list-item-detail/list-item-detail';
import { ListHttpRefreshPage } from '../pages/list/list-http-refresh/list-http-refresh';

import { FileProcessPage } from '../pages/file-process/file-process';
import { SelectBoxPage } from '../pages/select-box/select-box';
import { SlideBoxPage } from '../pages/slide-box/slide-box';
import { SegmentPage } from '../pages/segment/segment';
import { ModalPage, ModalContentPage } from '../pages/modal/modal';
import { PopoverPage, PopoverContentPage } from '../pages/popover/popover';
import { PdfProcessPage } from '../pages/pdf-process/pdf-process';
import { HorizontalScrollPage } from '../pages/horizontal-scroll/horizontal-scroll';
import { FlashLightPage } from '../pages/flash-light/flash-light';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AlertPage,
    FormInputsPage,
    RangePage,
    CheckBoxPage,
    ButtonPage,
    BasicButtonPage,
    IconsButtonPage,
    ButtonComponentsPage,
    ListPage,
    StaticListPage,
    ListHttpPage,
    ListHttpRefreshPage,
    ListItemDetailPage,
    FileProcessPage,
    SelectBoxPage,
    SlideBoxPage,
    SegmentPage,
    ModalPage,
    ModalContentPage,
    PopoverPage,
    PopoverContentPage,
    PdfProcessPage,
    HorizontalScrollPage,
    FlashLightPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ImageProcessingPageModule,
    IonicModule.forRoot(MyApp, {
      tabsHighlight: true,
      tabsPlacement: 'top',
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AlertPage,
    FormInputsPage,
    RangePage,
    CheckBoxPage,
    ButtonPage,
    BasicButtonPage,
    IconsButtonPage,
    ButtonComponentsPage,
    ListPage,
    StaticListPage,
    ListHttpPage,
    ListHttpRefreshPage,
    ListItemDetailPage,
    FileProcessPage,
    SelectBoxPage,
    SlideBoxPage,
    SegmentPage,
    ModalPage,
    ModalContentPage,
    PopoverPage,
    PopoverContentPage,
    PdfProcessPage,
    HorizontalScrollPage,
    FlashLightPage
  ],
  providers: [
    Network,
    StatusBar,
    SplashScreen,
    PersonListProvider,
    CommonController,
    Camera,
    ImagePicker,
    File,
    FilePath,
    Transfer,
    PhotoViewer,
    FileChooser,
    AndroidPermissions,
    Flashlight,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule { }
