import { AboutPage } from './../pages/about/about';
import { EquipmentsPage } from './../pages/equipments/equipments';
import { ComponentsModule } from './../components/components.module';
import { PipesModule } from './../pipes/pipes.module';
import { ConfigProvider } from './../providers/config/config';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeProvider } from '../providers/home/home';
import { ResourcesPage } from '../pages/resources/resources';
import { RecipesPage } from '../pages/recipes/recipes';
import { EquipmentProvider } from '../providers/equipment/equipment';
import { ResourceProvider } from '../providers/resource/resource';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EquipmentsPage,
    ResourcesPage,
    RecipesPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EquipmentsPage,
    ResourcesPage,
    RecipesPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider,
    ConfigProvider,
    EquipmentProvider,
    ResourceProvider
  ]
})
export class AppModule {}
