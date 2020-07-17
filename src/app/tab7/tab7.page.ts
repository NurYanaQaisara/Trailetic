import { Component,NgZone } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
let cordova: any;
@Component({
  selector: 'app-tab7',
  templateUrl: 'tab7.page.html',
  styleUrls: ['tab7.page.scss']
})
export class Tab7Page {

  devices:any[]=[];

  constructor(private BLUETOOTHSERIAL:BluetoothSerial, 
              private ngZone: NgZone) 
  {
    
  }
  // Scan(){
  //   this.devices=[];
  //   this.BLUETOOTHSERIAL.scan([],15).subscribe(
  //     device => this.onDeviceDiscovered(device)
  //   );
  // }
  onDeviceDiscovered(device){
    console.log('Discovered' + JSON.stringify(device,null,2));
    this.ngZone.run(()=>{
      this.devices.push(device)
      console.log(device)
    })
  }

}
