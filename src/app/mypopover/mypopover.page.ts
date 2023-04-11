import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mypopover',
  templateUrl: './mypopover.page.html',
  styleUrls: ['./mypopover.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MypopoverPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
