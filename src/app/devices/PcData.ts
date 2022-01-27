import {ComputerInterface} from "./DevicesInterface";

export class PcData{


   Mac : ComputerInterface = {
        deviceName: 'Mac - Various Models',
        deviceImg: 'assets/Macbook/macbook.png',
        repairId: 'macbook',
        repair: [
          {repairTitle: 'We offer various repair such as screen repair, keyboard repair, port repair, etc. Pricing varies depending on the macbook model, year, and on the repair you need to do. Call or text us for a quote!', repairDetails: '', repairImg: 'assets/Macbook/macbook.png', repairPrice: ''}
        ]
      }

  Windows : ComputerInterface = {
    deviceName: 'Windows - Various Models',
    deviceImg: 'assets/Macbook/windows.png',
    repairId: 'windows',
    repair: [
      {repairTitle: 'We offer various repair such as screen repair, keyboard repair, port repair, etc. Pricing varies depending on the computer model, year, and on the repair you need to do. Call or text us for a quote!', repairDetails: '', repairImg: 'assets/Macbook/windows.png', repairPrice: ''}
    ]
  }




  getDevices(){
    let arr : Array<ComputerInterface> = [this.Mac, this.Windows];
    return arr;
  }
}
