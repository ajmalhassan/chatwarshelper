import { ConfigProvider } from './../config/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RecipeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeProvider {

  constructor(public http: HttpClient, private config: ConfigProvider) {
  }

  getRecipeList() {
    return this.http.get(``);
  }

}

