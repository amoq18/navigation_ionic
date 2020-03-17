import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  value = null;

  constructor(
    public navParams: NavParams,
    public popoverController: PopoverController
  ) {
    
  }

  ngOnInit() { 
    this.value = this.navParams.get('popoverValue');
  }
  
  close() {
    console.log('ok');
    this.popoverController.dismiss();
  }

}
