import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { PersonListProvider } from '../../../providers/person-list/person-list';
import { CommonController } from '../../../providers/CommonController';

@Component({
  selector: 'page-list-http-refresh',
  templateUrl: 'list-http-refresh.html',
  providers: [PersonListProvider]
})

export class ListHttpRefreshPage {
  public mSelectedViewType: string = "list";
  public mResponse: any;

  public mLoader: any;
  public mRefresher: any;
  public mInfiniteScroll: any;

  public mDataList: any = [];
  public page: number = 1;
  // public totalItem: number = 0;
  public rows: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public personListProvider: PersonListProvider,
    public loadingCtrl: LoadingController,
    public commonCtrl: CommonController
  ) {
    this.loadData(true);
  }

  presentLoading() {
    this.mLoader = this.loadingCtrl.create({
      content: "Please wait...",
    });

    this.mLoader.onDidDismiss(() => {
      // console.log('Dismissed loading');
    });

    this.mLoader.present();
  }

  loadData(isLoading) {
    if (this.commonCtrl.hasConnection()) {
      if (isLoading) {
        this.presentLoading();
      }

      this.personListProvider.load(this.page).then(data => {
        if (isLoading) {
          this.mLoader.dismiss();
        }

        if (this.mRefresher != null) {
          this.mRefresher.complete();
        }

        if (this.mInfiniteScroll != null) {
          this.mInfiniteScroll.complete();
        }

        if (data != null) {
          this.mResponse = data;

          if (this.mResponse != null && this.mResponse.length > 0) {
            for (let i = 0; i < this.mResponse.length; i++) {
              this.mDataList.push(this.mResponse[i]);
            }
          }

          this.rows = Array.from(Array(Math.ceil(this.mDataList.length / 2)).keys());
        } else {
          this.commonCtrl.showToast("Network Error.", "bottom", 3000, true, "Ok", true);
        }
      }).catch(error => {
        this.mLoader.dismiss();
        this.commonCtrl.showToast("Network Error.", "bottom", 3000, true, "Ok", true);
      });
    } else {
      this.commonCtrl.showToast("No Internet Connection.", "bottom", 3000, true, "Ok", true);
    }
  }

  refreshData() {
    this.page = 1;
    // this.totalItem = 0;
    this.mDataList = [];

    if (this.mInfiniteScroll != null) {
      this.mInfiniteScroll.enable(true);
    }
  }

  changeViewType(viewType) {
    this.mSelectedViewType = viewType;
  }

  doRefresh(refresher) {
    if (refresher != null) {
      this.mRefresher = refresher;
    }

    this.refreshData();
    this.loadData(false);
  }

  loadMoreData(infiniteScroll) {
    if (infiniteScroll != null) {
      this.mInfiniteScroll = infiniteScroll;
    }

    this.page++;
    this.loadData(false);
  }

  /*
  loadMoreData(infiniteScroll) {
    if (infiniteScroll != null) {
      this.mInfiniteScroll = infiniteScroll;
    }

    if (this.mDataList.length < this.totalItem) {
      this.page++;
      this.loadData(false);
    } else {
      this.mInfiniteScroll.complete();
      this.mInfiniteScroll.enable(false);

      this.commonCtrl.showToast("No more data available.", "bottom", 3000, true, "Ok", true);
    }
  }
  */

}
