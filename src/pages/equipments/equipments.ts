import { Item } from './../../models/item';
import { EquipmentProvider } from './../../providers/equipment/equipment';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EquipmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-equipments',
  templateUrl: 'equipments.html',
})
export class EquipmentsPage {
  equip ={
    data: {
      items: [],
      categories: []
    },
    loading: false,
    noData: false,
    error: false
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private equipmentprovider: EquipmentProvider) {
  }

  ionViewDidLoad() {
    this.getItems();
  }

  doRefresh(refresher) {
    this.getItems();
    refresher.complete();
  }

  getItems() {
    this.equip.loading = true;
    this.equipmentprovider.getAllItems()
    .subscribe((data: Item[]) => {
      this.equip.loading = false;
      this.equip.noData = data.length <= 0;
      this.equip.data.items = data;
      this.getCategories(data);
    },
    error => {
      this.equip.loading = false;
      this.equip.error = true;
    });
  }

  getCategories(items: Item[]) {
    this.equip.data.categories = [];
    items.forEach(item => {
      if(this.equip.data.categories.indexOf(item.subtype) === -1) {
        this.equip.data.categories.push(item.subtype)
      }
    });
  }

}
