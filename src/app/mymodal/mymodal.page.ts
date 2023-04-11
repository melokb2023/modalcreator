import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mymodal',
  templateUrl: './mymodal.page.html',
  styleUrls: ['./mymodal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MymodalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
