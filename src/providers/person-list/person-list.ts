import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { CommonController } from '../CommonController';

@Injectable()
export class PersonListProvider {

  constructor(public http: Http, public commonCtrl: CommonController) {

  }

  load(page?: any) {
    let API_URL = this.commonCtrl.API_URL_LIST + "?results=10";

    if (page != null) {
      API_URL += "&page=" + page;
    }

    return new Promise(resolve => {
      this.http.get(API_URL)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data.results);
        }, (error) => {
          // console.log(error);
          // resolve(error.json());

          let resp = { "status": false };
          resolve(resp);
        });
    });
  }

  postMethod(param?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    return new Promise(resolve => {
      this.http.post(this.commonCtrl.API_URL_LIST, param, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          resolve(err.json());
        });
    });
  }

  loadProductData(page: number) {
    return new Promise(resolve => {
      this.http.get(this.commonCtrl.API_PRODUCT_URL + "products/womens-apparel/womens-apparel-topwear/tops-tunics?page=" + page)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (error) => {
          let resp = { "isError":true };
          resolve(resp);
        });
    });
  }

  getHomeData(options?: RequestOptions) {
    let api_url = 'https://www.addtobuy.com/api/home';

    if (!options) {
      options = new RequestOptions();
    }

    return new Promise((resolve, reject) => {
      this.http.get(api_url, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          try {
            resolve(err.json());
          } catch (e) {
            try {
              resolve(err.json());
            } catch (e) {
              reject(err);
            }
          }
        });
    });
  }
}
