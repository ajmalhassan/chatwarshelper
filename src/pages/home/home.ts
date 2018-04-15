import { KformatPipe } from './../../pipes/kformat/kformat';
import { ArraySortPipe } from './../../pipes/array-sort/array-sort';
import { HomeProvider } from './../../providers/home/home';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  home = {
    ranks: {
      data: [],
      loading: false,
      error: false,
      noData: false
    },
    results: {
      data: [],
      loading: false,
      error: false,
      noData: false
    },
    cumulative: {
      data: {
        latest: {},
        previous: {},
        display: []
      },
      loading: false,
      error: false,
      noData: false
    }
  }

  constructor(public navCtrl: NavController, private homeprovider: HomeProvider) {

  }

  ngOnInit() {
    this.getWorldTop();
    this.getLastBattle();
    this.getCumulative();
  }

  doRefresh(refresher) {
    this.getWorldTop();
    this.getLastBattle();
    this.getCumulative();
    refresher.complete();
  }

  getWorldTop() {
    this.home.ranks.loading = true;
    this.home.ranks.error = false;
    this.homeprovider.getWorldTop()
    .subscribe((data: Array<String>) => {
      this.home.ranks.loading = false;
      this.home.ranks.noData = data.length <= 0;
      this.home.ranks.data = data;
    },
    error => {
      this.home.ranks.loading = false;
      this.home.ranks.error = true;
    });
  }

  getLastBattle() {
    this.home.results.loading = true;
    this.home.results.error = false;
    this.homeprovider.getLastBattle()
    .subscribe((data: Array<String>) => {
      this.home.results.loading = false;
      this.home.results.noData = data.length <= 0;
      this.home.results.data = data;
    },
    error => {
      this.home.results.loading = false;
      this.home.results.error = true;
    });
  }

  getCumulative() {
    this.home.cumulative.loading = true;
    this.home.cumulative.error = false;
    this.homeprovider.getCumulativeScore()
    .subscribe((data: Array<String>) => {
      this.home.cumulative.noData = data.length <= 0;
      this.home.cumulative.data.previous = data[0];
      this.home.cumulative.data.latest = data[1];
      if(!this.home.cumulative.noData) {
        this.generateCumulativeDisplay();
      }
      else {
        this.home.cumulative.loading = false;
      }
    },
    error => {
      this.home.cumulative.loading = false;
      this.home.cumulative.error = true;
    });
  }

  generateCumulativeDisplay() {
    this.home.cumulative.data.display = [];
    let latest = this.home.cumulative.data.latest;
    let previous = this.home.cumulative.data.previous;

    for (const key in latest) {
      if( key !== 'message_id' && key !== 'message_date'){
        this.home.cumulative.data.display.push(
          {
            castle: key,
            score: latest[key],
            diff: latest[key] - previous[key]
          }
        )
      }
    }
    this.home.cumulative.loading = false;
  }

  /* 
    @Todo: Remove this function after the api has been fixed
  */ 

 getCastleIcon(castleName: String) {
  switch(castleName) {
    case 'sharkteeth': return "🦈"
    case 'dragonscale': return "🐲";
    case 'wolfpack': return "🐺";
    case 'potato': return "🥔";
    case 'highnest': return "🦅";
    case 'moonlight': return "🌕";
    case 'deerhorn': return "🦌";
  }
}

}
