import { NetworkinfoProvider } from './services/networkinfo/networkinfo';
import { TruncateWordPipePipe } from './pipes/truncate-word-pipe.pipe';
import { GlobalErrorHandlerService } from './services/errorhandling/global-error-handler.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen, NetworkinfoProvider,Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
