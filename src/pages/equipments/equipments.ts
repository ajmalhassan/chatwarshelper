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
    data: [],
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

  getItems() {
    this.equip.loading = true;
    this.equipmentprovider.getAllItems()
    .subscribe((data: Array<String>) => {
      this.equip.loading = false;
      this.equip.noData = data.length <= 0;
      this.equip.data = data;
      this.generateDisplay(data);
    },
    error => {
      this.equip.loading = false;
      this.equip.error = true;
    });
  }

  getCategories(items: Array<String>) {
    console.log('recieved', items);
  }

  getCategoryItems(items, categories) {
    console.log('finding items');
  }

  generateDisplay(list) {
    console.log('generating....')
  }

}
