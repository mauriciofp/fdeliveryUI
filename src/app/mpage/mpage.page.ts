import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mpage',
  templateUrl: './mpage.page.html',
  styleUrls: ['./mpage.page.scss'],
})
export class MpagePage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  openCustom() {
    this.menuCtrl.enable(true, 'custom');
    this.menuCtrl.open('custom');
  }
  openEnd() {
    // this.menuCtrl.enable(true, 'second');
    this.menuCtrl.open('second');
  }

}
