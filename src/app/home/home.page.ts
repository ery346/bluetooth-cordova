import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
import { NameService } from '../myapp/service/name.service';
interface pairedList {
  class: number,
  id: String,
  address: String,
  name: String
  }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pairedList: pairedList[]=[{name:'as', id:'asdfsdf', class:23423, address:'567yhrt'}] ;
  constructor( private bluetoothSerial: BluetoothSerial,
               private toastController: ToastController,
               private loadingController: LoadingController, 
               private route: Router,
               private service: NameService) {}
 
  checkBluetoothEnable() {
    this.bluetoothSerial.isEnabled().then(success => {
    this.listPairedDevices();
    }, error => {
    this.showToast("Por favor, activa el Bluetooth");
    })
  }

 async listPairedDevices() {
    let loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Porfavor espere...',
      animated: true
    });
    await loading.present();
    this.bluetoothSerial.list().then(success => {
    this.pairedList = success;
    }, error => {
    this.showToast("Ha sucedido un error al recuperar la lista, inténtalo de nuevo");
    });
    await loading.dismiss();
  }

 async connect(address: any, name: string) {
  this.route.navigate(['/myapp/dashboard']);
  this.service.getName(name);
    // let loading = await this.loadingController.create({
    //   spinner: 'bubbles',
    //   message: `Conectando con ${name}`,
    //   animated: true
    // });
    // await loading.present();
    // this.bluetoothSerial.connect(address).subscribe(success => {
    // // this.deviceConnected();
    // loading.dismiss();
    // if(success){
    //   this.route.navigate(['myapp', {nameDevice: name}])
    //   this.showToast("Conectado correctamente");
    // }
    // }, error => {
    // loading.dismiss();
    // this.route.navigateByUrl('home');
    // this.showToast("No se ha podido conectar, algo ha fallado.");
    // });
  }

  // deviceConnected() {-
  // this.bluetoothSerial.subscribe("\n").subscribe(success => {

  // this.handleData(success);
  // }, error => {
  // this.showError(error);
  // })
  // }

  async showToast(msg:any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: 'bottom'
    });

    await toast.present();
  }



}
