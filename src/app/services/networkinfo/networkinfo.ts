import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network/ngx';

/*
  Generated class for the NetworkinfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkinfoProvider {
  public online: boolean;
  constructor(
    public platform: Platform,
    public network: Network
  ) {
    console.log('Hello NetworkinfoProvider Provider');

    this.platform.ready().then(() => {
      let type = this.network.type;

      if (type == "unknown" || type == "none" || type == undefined) {
        this.online = false;
      } else {
        this.online = true;
      }
    });

    this.network.onDisconnect().subscribe(() => {
      this.online = false;

      console.log('network was disconnected :-(');
    });
    this.network.onConnect().subscribe(() => {
      this.online = true;

      console.log('network was connected :-)');
    });


  }

  public isAppOnline(): boolean {
    return this.online;
  }

}
