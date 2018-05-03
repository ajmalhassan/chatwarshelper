import { ResourceProvider } from './../../providers/resource/resource';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {

  resources ={
    data: [],
    loading: false,
    noData: false,
    error: false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private resourceprovider: ResourceProvider) {
  }

  ionViewDidLoad() {
    this.getAllResources();
  }

  doRefresh(refresher) {
    this.getAllResources();
    refresher.complete();
  }

  getAllResources() {
    this.resources.loading = true;
    this.resources.error = false;
    this.resourceprovider.getAllResources()
    .subscribe((data: Array<Object>) => {
      this.resources.data = data;
      this.resources.loading = false;
      this.resources.noData = data.length <= 0;
    },
  error => {
    this.resources.loading = false;
    this.resources.error = true;
  })
  }

}
