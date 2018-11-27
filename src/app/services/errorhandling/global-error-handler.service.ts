import { Injectable, ErrorHandler } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { AlertController } from 'ionic-angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService extends ErrorHandler {

  constructor(private alertCtrl: AlertController) {
    super();
  }

  handleError(error) {
    this.triggerAlert(error);
    throw error;
  }

  async ionic4triggerAlert(error) {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();
    const alert = await alertController.create({
      header: 'Message',
      message: error,
      buttons: ['OK']
    });
    return await alert.present();
  }

  async triggerAlert(errorStr) {
    const error = JSON.parse(errorStr.message) || {};
    const alert = await this.alertCtrl.create({
      header: error.status + ' Error',
      subHeader: error.name,
      message: error.error.status_message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
