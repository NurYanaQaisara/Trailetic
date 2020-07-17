import { Component } from '@angular/core';
<<<<<<< HEAD

=======
>>>>>>> 083e62a25f7d1d595d0dcdcba4d27738a79065a1
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

<<<<<<< HEAD
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
=======
// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss']
// })

@Component({
  templateUrl: 'tab7.page.html'
})

export class AppComponent {
  //rootPage: any = Tab7Page;

>>>>>>> 083e62a25f7d1d595d0dcdcba4d27738a79065a1
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
<<<<<<< HEAD
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
=======
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    }
    );
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }
>>>>>>> 083e62a25f7d1d595d0dcdcba4d27738a79065a1
}
