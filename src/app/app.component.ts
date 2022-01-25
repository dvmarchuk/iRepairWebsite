import {Component, OnInit} from '@angular/core';
import {IphoneInt} from "./devices/device";
import {DeviceData} from "./devices/DeviceData";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iRepairSiteAngular';
  showRepair: boolean = false;
  // public iphones: any;

  // constructor(private deviceData: DeviceData) {
  //
  // }


  iphones = [iphone13ProMax, iphone13Pro, iphone13, iphone13Mini, iphone12ProMax, iphone12Pro, iphone12, iphone12Mini, iphoneSE, iphone11Pro, iphone11, iphoneEtc];


  showRepairBool(){
    this.showRepair = !this.showRepair;
}

  test() {
    console.log("potato")
  }
}










let iphone13ProMax: IphoneInt = {
  deviceName: 'iPhone 13 Pro Max',
  deviceImg: 'assets/iphone/iphone13.png',
  repairId: 'Iphone13ProMax',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone13Pro: IphoneInt = {
  deviceName: 'iPhone 13 Pro',
  deviceImg: 'assets/iphone/iphone13.png',
  repairId: 'Iphone13Pro',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone13: IphoneInt = {
  deviceName: 'iPhone 13',
  deviceImg: 'assets/iphone/iphone13np.png',
  repairId: 'Iphone13',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone13Mini: IphoneInt = {
  deviceName: 'iPhone 13 Mini',
  deviceImg: 'assets/iphone/iphone13np.png',
  repairId: 'Iphone13Mini',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone12ProMax: IphoneInt = {
  deviceName: 'iPhone 12 Pro Max',
  deviceImg: 'assets/iphone/iphone12pro.png',
  repairId: 'Iphone12ProMax',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone12Pro: IphoneInt = {
  deviceName: 'iPhone 12 Pro',
  deviceImg: 'assets/iphone/iphone12pro.png',
  repairId: 'Iphone12Pro',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone12: IphoneInt = {
  deviceName: 'iPhone 12',
  deviceImg: 'assets/iphone/iphone12.png',
  repairId: 'Iphone12',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone12Mini: IphoneInt = {
  deviceName: 'iPhone 12 Mini',
  deviceImg: 'assets/iphone/iphone12.png',
  repairId: 'Iphone12Mini',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphoneSE: IphoneInt = {
  deviceName: 'iPhone SE',
  deviceImg: 'assets/iphone/iphoneSE.png',
  repairId: 'IphoneSE',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone11Pro: IphoneInt = {
  deviceName: 'iPhone 11 Pro',
  deviceImg: 'assets/iphone/iphone11pro.png',
  repairId: 'Iphone11Pro',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphone11: IphoneInt = {
  deviceName: 'iPhone 11',
  deviceImg: 'assets/iphone/iphone_11.png',
  repairId: 'Iphone11',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};

let iphoneEtc: IphoneInt = {
  deviceName: 'iPhone 10, 8, 7, 6, etc',
  deviceImg: 'assets/iphone/iphone-x-png-29472.png',
  repairId: 'IphoneEtc',
  repair: [
    {repairTitle:'Screen', repairDetails: 'Original Apple OLED screen', repairImg: '',repairPrice: 999},
    {repairTitle:'Rear Screen', repairImg: '',repairPrice: 995},
    {repairTitle: 'Rear/Front Camera', repairImg: 'assets/iphone/camera2.png',repairPrice: 999},
    {repairTitle:'Charger Port', repairImg: 'assets/iphone/chargerPort.png',repairPrice: 995},
    {repairTitle:'Battery Replacement', repairImg: 'assets/iphone/battery3.png',repairPrice: 195},
    {repairTitle: 'Other Repairs?',repairImg: 'assets/iphone/iphone13.png'},
  ]
};
