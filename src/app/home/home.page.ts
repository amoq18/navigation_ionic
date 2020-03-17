import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { PopoverPage } from '../pages/popover/popover.page';
// import { Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(
    private navController: NavController,
    private modalController: ModalController,
    private popoverController: PopoverController
  ) { }
  
  pushPage(value: string) {
    return this.navController.navigateForward('/second/' + value);
  }

  async pushModal(value: string) {
      const modal = await this.modalController.create({
        component: ModalPage,
        componentProps: {
          'modalValue': value
        }
      });
      return await modal.present();
  }

  async pushPopover(value: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: {
        'popoverValue': value
      }
      // translucent: true,
    });
    popover.present();
  }

}
