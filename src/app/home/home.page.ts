import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController , PopoverController} from '@ionic/angular';
import { MymodalPage } from '../mymodal/mymodal.page';
import { MypopoverPage } from '../mypopover/mypopover.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private modalCtrl:ModalController, private popoverCtrl:PopoverController) {}

  async openModal(){
    const modal =this.modalCtrl.create({
      component: MymodalPage,
      cssClass: 'small-modal',
    });
    (await modal).present();
  }
 
  async openTransparentModal(){
    const modal = await this.modalCtrl.create({
      component: MypopoverPage,
      cssClass: 'transparent-modal',
    });
    await modal.present();
  }

  async popOverModal(ev:any){
    const popover = await this.popoverCtrl.create({
      component: MypopoverPage,
      event: ev,
      cssClass: 'custom-popover',
    });
    await popover.present();
  }

}
