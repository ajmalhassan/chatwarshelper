import { ConfigProvider } from './../config/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient, private config: ConfigProvider) {
  }

  getWorldTop() {
    return this.http.get(`${this.config.baseURL}/worldtop`);
  }

  getLastBattle() {
    return this.http.get(`${this.config.baseURL}/lastbattle`);
  }

  getCumulativeScore() {
    return this.http.get(`${this.config.baseURL}/battles/cumulativescore/2`);
  }



}
