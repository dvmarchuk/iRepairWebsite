import {Component, OnInit} from '@angular/core';
import {
  AndroidPhoneInterface,
  AndroidTabletInterface,
  ComputerInterface,
  IpadInterface,
  IphoneInterface,
  WatchInterface
} from "./devices/DevicesInterface";
import {IphoneData} from "./devices/IphoneData";
import {IpadData} from "./devices/IpadData";
import {WatchData} from "./devices/WatchData";
import {PcData} from "./devices/PcData";
import {AndroidTabletData} from "./devices/AndroidTabletData";
import {AndroidData} from "./devices/AndroidData";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iRepairSiteAngular';
  showRepair: boolean = false;

  iphonesArray : Array<IphoneInterface> = new IphoneData().getDevices();
  iphones = this.iphonesArray;

  ipadArray : Array<IpadInterface> = new IpadData().getDevices();
  ipads = this.ipadArray;

  androidPhoneArray: Array<AndroidPhoneInterface> = new AndroidData().getDevices();
  androidPhones = this.androidPhoneArray;

  androidTabletArray: Array<AndroidTabletInterface> = new AndroidTabletData().getDevices();
  androidTablets = this.androidTabletArray;

  macArray: Array<ComputerInterface> = new PcData().getDevices();
  computers = this.macArray;

  watchArray: Array<WatchInterface> = new WatchData().getDevices();
  watches = this.watchArray;

  showRepairBool(){
    this.showRepair = !this.showRepair;
}
}
