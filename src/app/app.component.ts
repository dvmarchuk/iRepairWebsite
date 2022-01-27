import {Component, OnInit} from '@angular/core';
import {IpadInterface, IphoneInterface, WatchInterface} from "./devices/DevicesInterface";
import {IphoneData} from "./devices/IphoneData";
import {IpadData} from "./devices/IpadData";
import {WatchData} from "./devices/WatchData";


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


  androidPhones = [iphoneEtc]
  androidTablets = [iphoneEtc]
  computers = [iphoneEtc]

  watchArray: Array<WatchInterface> = new WatchData().getDevices();
  watches = this.watchArray;

  showRepairBool(){
    this.showRepair = !this.showRepair;
}

  test() {

  }
}




let iphoneEtc: IphoneInterface = {
  deviceName: 'iPhone 10, 8, 7, 6, etc',
  deviceImg: 'assets/iphone/iphone-x-png-29472.png',
  repairId: 'IphoneEtc',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: 'assets/iphone/brokenScreen.png',repairPrice: '$995'},
    {repairTitle:'Rear Screen', repairImg: 'assets/iphone/rearCrack.png',repairPrice: '$995'},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: '$995'},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: '$995'},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: '$195'},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/electriciphone.png'},
  ]
};
