import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from './../config/config';

/*
  Generated class for the ResourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResourceProvider {

  constructor(public http: HttpClient, private config: ConfigProvider) {
  }

  getAllResources() {
    return this.http.get(`${this.config.baseURL}/resources`);
  }

}
