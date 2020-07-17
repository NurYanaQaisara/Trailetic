<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
let cordova: any;
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    BluetoothSerial,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
=======
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonApp, /*IonicErrorHandler*/ IonicModule } from '@ionic/angular';
//import { RouteReuseStrategy } from '@angular/router';
import { /*SplashScreenOriginal, */ SplashScreen  } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { /*BluetoothSerialOriginal, */BluetoothSerial} from '@ionic-native/bluetooth-serial';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab7Page } from '../app/tab7/tab7.page';

//let cordova: any;
@NgModule({
  declarations: [
    AppComponent,
    Tab7Page],
    // imports: [
    //   BrowserModule,
    //   IonicModule.forRoot(AppComponent)
    // ],
  //   bootstrap: [IonicApp],
  // entryComponents: [],
  // imports: [BrowserModule, IonicModule.forRoot(AppComponent), AppRoutingModule],
  // bootstrap: [IonicApp],
  // entryComponents: [AppComponent, Tab7Page],
  // providers: [
  //   BluetoothSerial,
  //   StatusBar,
  //   SplashScreen,
  //   { provide: ErrorHandler, useClass: IonicErrorHandler }  
  // ],
  
})
export class AppModule {}
  
>>>>>>> 083e62a25f7d1d595d0dcdcba4d27738a79065a1
