import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.page.html',
  styleUrls: ['./input-text.page.scss'],
})
export class InputTextPage implements OnInit {
  inputData: string;
  constructor( private bluetoothSerial: BluetoothSerial,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  sendData(data:any) {
    this.bluetoothSerial.write(data).then(success => {
        this.showToast('Dato enviado');
        this.inputData = '';
    }, error => {
    this.showToast(error);
    })
  }

  
  async showToast(msg:any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: 'top'
    });

    await toast.present();
  }
}
