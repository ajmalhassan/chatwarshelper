import { ConfigProvider } from './../config/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EquipmentProvider {

  constructor(public http: HttpClient, private config: ConfigProvider) {
  }

  getAllItems() {
    return this.http.get(`${this.config.baseURL}/items`);
  }

}

