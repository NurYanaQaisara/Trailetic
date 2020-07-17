<<<<<<< HEAD
import { Component,NgZone } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
let cordova: any;
=======
import { Component/*,NgZone*/ } from '@angular/core';
import { NavController } from '@ionic/angular'
import { BluetoothSerial /*BluetoothSerialOriginal*/ } from '@ionic-native/bluetooth-serial';
import { AlertController, ToastController } from '@ionic/angular';

//let cordova: any;
>>>>>>> 083e62a25f7d1d595d0dcdcba4d27738a79065a1
@Component({
  selector: 'app-tab7',
  templateUrl: 'tab7.page.html',
  styleUrls: ['tab7.page.scss']
})
<<<<<<< HEAD
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

=======

export class Tab7Page {
  pairedList: pairedlist;
  listToggle: boolean = false;
  pairedDeviceID: number = 0;
  dataSend: string = "";
 // devices:any[]=[];

 constructor(
  public navCtrl: NavController, 
  private alertCtrl: AlertController, 
  private bluetoothSerial: typeof BluetoothSerial, 
  private toastCtrl: ToastController) {
this.checkBluetoothEnabled();
}
              
              checkBluetoothEnabled()
              {
                this.bluetoothSerial.isEnabled().then(success => 
                  {this.listPairedDevices();
                }, error => {this.showError("Please Enable Bluetooth")
              });
              }

              listPairedDevices()
              {
                this.bluetoothSerial.list().then(success => 
                {
                  this.pairedList = success;
                  this.listToggle = true;
                },
                  error =>
                  {
                    this.showError("Please Enable Bluetooth")
                    this.listToggle = false;
                  }
                );
              }
   
              selectDevice()
              {
                let connectedDevice = this.pairedList[this.pairedDeviceID];
                if (!connectedDevice.address)
                {
                  this.showError('Select Paired Device to connect');
                  return;
                }
                let address = connectedDevice.address;
                let name = connectedDevice.name;

                this.connect(address);
              }

              connect(address) //attempt to connect device with specified address, call app.daviceConnected if success
              {
                this.bluetoothSerial.connect(address).subscribe(success => 
                  {
                    this.deviceConnected();
                    this.showToast("Successfully Connected");
                  }, error =>
                    {
                      this.showError("Error: Connecting to Device");
                    });
              }

              deviceConnected() //subscribe to data receiving as soon as the delimiter is read
              {
                this.bluetoothSerial.subscribe('\n').subscribe(success =>
                  {
                    this.handleData(success);
                    this.showToast("Connected Successfully");
                  },
                  error => {
                    this.showError(error);
                  });
              }

              deviceDisconnected() //unsubscribe from data receiving
              {
                this.bluetoothSerial.disconnect();
                this.showToast("Device Disconnected");
              }

              handleData(data)
              {
                this.showToast(data);
              }

              sendData()
              {
                this.dataSend+='\n';
                this.showToast(this.dataSend);
                
                this.bluetoothSerial.write(this.dataSend).then(success =>
                  {
                    this.showToast(success);
                  }, error => {
                    this.showError(error)
                  });
              }

              async showError(error) {
                // let alert = this.alertCtrl.create({
                //   title: 'Error',
                //   subTitle: error,
                //   buttons: ['Dismiss']
                // });
                // (await alert).present();
              }

              async showToast(msj)
              {
                const toast = this.toastCtrl.create({
                  message: msj,
                  duration: 1000
                });
                (await toast).present();
              }

  
}

interface pairedlist
{
  "class": number,
  "id": string,
  "address": string,
  "name": string
>>>>>>> 083e62a25f7d1d595d0dcdcba4d27738a79065a1
}
