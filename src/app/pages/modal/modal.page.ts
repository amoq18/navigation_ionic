import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  value = null;

  constructor(private navParams: NavParams, private modalController: ModalController) { 
    this.value = this.navParams.get('modalValue');
  }

  close() {
    this.modalController.dismiss();
  }

  ngOnInit() { }

}
