import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private alert;

  constructor(private alertController: AlertController) { }

  async presentAlert(headerText, subHeaderText, messageText, close = false) {
    if (close) {
      this.alert = await this.alertController.create({
        header: headerText,
        subHeader: subHeaderText,
        message: messageText,
        buttons: [{
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // close the app
            if (navigator['app']) navigator['app'].exitApp();
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }]
      });
    } else {
      this.alert = await this.alertController.create({
        header: headerText,
        subHeader: subHeaderText,
        message: messageText,
        buttons: ['OK']
      });
    }


    await this.alert.present();
  }

  // dismissAlert(){
  //    this.alert.dismiss();
  // }
}
