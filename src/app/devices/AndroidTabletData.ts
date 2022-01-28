import {AndroidTabletInterface} from "./DevicesInterface";

export class AndroidTabletData{



  tablet: AndroidTabletInterface = {
    deviceName: 'Android Tablets - Various Models',
    deviceImg: 'assets/Android/galaxytabs6.png',
    repairId: 'androidTablet',
    repair: [
      {repairTitle: '', repairDetails: 'We offer various repair such as screen repair, port repair, camera repair, etc. Pricing varies depending on the tablet model, year, and on the repair you need to do. Call or text us for a quote!', repairImg: 'assets/Android/brokenGalaxy.png', repairPrice: ''}
    ]
  }

  getDevices(){
    let arr : Array<AndroidTabletInterface> = [this.tablet];
    return arr;
  }
}
