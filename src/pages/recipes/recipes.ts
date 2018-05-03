import { recipeData, List, Ingredient } from './../../models/recipeType';
import { RecipeProvider } from './../../providers/recipe/recipe';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipeTriggers = {
    noData: false,
    loading: false,
    error: false
  };
  recipeList: Array<List>;
  dupRecipeList: Array<List>;
  ingredientList: Array<String>;
  chosenList = [];
  filterList = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private recpieProvider: RecipeProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
    this.getRecpieList();
  }

  doRefresh(refresher) {
    this.getRecpieList();
    refresher.complete();
  }

  getSelectedIngredients(ingredients) {
    this.chosenList = ingredients;
    this.generateViewList();
  }

  generateViewList() {
    this.recipeList = JSON.parse(JSON.stringify(this.dupRecipeList));
    if(this.chosenList.length) {
      this.recipeList.forEach((value: List, i) => {
        value.recipes = value.recipes.filter((value, j) => {
          value.ingredients = value.ingredients.filter((value: Ingredient, k) => {
            return this.chosenList.indexOf(value.ingredient.replace(" ", "").toLowerCase()) === -1
          })
          if(value.ingredients.length === 0) {
            value.ingredients = JSON.parse(JSON.stringify(this.dupRecipeList[i].recipes[j].ingredients));
            return true;
          }
          return false;
        })
      }) 
    }
    
  }

  generateCheckedList() {
    this.filterList = [];
    this.ingredientList.forEach((value, index) => {
      this.filterList.push({
        type: 'checkbox',
        label: value,
        value: value.replace(" ", "").toLowerCase(),
        checked: this.chosenList.indexOf(value.replace(" ", "").toLowerCase()) !== -1
      })
    })
  }

  getRecpieList() {
    this.recipeTriggers.error = false;
    this.recipeTriggers.loading = true;
    this.recpieProvider.getRecipeList().subscribe((data: recipeData) => {
      this.recipeList = data.list;
      this.dupRecipeList = data.list;
      this.ingredientList = data.ingredients;
      this.ingredientList.sort();
      this.generateCheckedList();
      this.generateViewList();
      this.recipeTriggers.loading = false;
      this.recipeTriggers.noData = this.recipeList.length <= 0;
    },
    error => {
      this.recipeTriggers.loading = false;
      this.recipeTriggers.error = true;
    })
  }

  showFilter() {
    this.generateCheckedList();
    let alert = this.alertCtrl.create({
    title: 'Select your ingredients',
    inputs: this.filterList,
    buttons: [
      {
        text: 'Clear',
        role: 'cancel',
        handler: data => {
          this.chosenList = [];
          this.generateViewList();
          this.presentToast('Ingredients cleared')
        }
      },
      {
        text: 'Apply',
        handler: data => {
          this.chosenList = data;
          this.generateViewList();
          this.presentToast(`${this.chosenList.length} Ingredients applied`)
        }
      }
    ]
  });
  alert.present();
  }

  presentToast(message, duration?) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration || 3000
    });
    toast.present();
  }


}
