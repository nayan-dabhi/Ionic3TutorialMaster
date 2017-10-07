import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PersonListProvider } from '../../providers/person-list/person-list';
import { CommonController } from '../../providers/CommonController';


@Component({
  selector: 'page-horizontal-scroll',
  templateUrl: 'horizontal-scroll.html'
})


export class HorizontalScrollPage {
  public apiResult: any;
  public rows: any;

  public mClientContactList: any = [];
  public mMainProductBlocks: any = [];
  public mBrandBlocks: any = [];

  constructor(
    public navCtrl: NavController,
    public commonCtrl: CommonController,
    public personListService: PersonListProvider) {
  }

  ionViewDidEnter() {
    this.getHomeData();
  }

  getHomeData() {
    if (this.commonCtrl.hasConnection()) {
      this.commonCtrl.showLoading("Loading...");

      this.personListService.getHomeData().then(data => {
        if (data != null) {
          this.commonCtrl.hideLoading();

          this.apiResult = data;

          if (this.apiResult != null) {
            this.setClientListData(this.apiResult);
          } else {
            console.log("data null or any error in api");
          }
        } else {
          this.commonCtrl.hideLoading();
          console.log("data null or any error in api");
        }
      }, error => {
        this.commonCtrl.hideLoading();
        console.log("error in api");
      });
    }
  }

  setClientListData(data) {
    if (data.slider != null && data.slider.length > 0) {
      for (let i = 0; i < data.slider.length; i++) {
        this.mClientContactList.push(data.slider[i]);
      }
    }

    if (data.product != null && data.product.length > 0) {
      for (let i = 0; i < data.product.length; i++) {
        this.mMainProductBlocks.push(data.product[i]);
      }
    }
  }

}
