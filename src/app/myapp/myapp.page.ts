import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ChangeDetectorRef } from "@angular/core";


@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.page.html',
  styleUrls: ['./myapp.page.scss'],
})
export class MyappPage {
  inputData: string;
  nameDeviceConnected: string= '';
  matches: string[];
  speechData: string = 'light';
  constructor( private bluetoothSerial: BluetoothSerial,
    private toastController: ToastController,
    private route: Router,
    private speechRecognition: SpeechRecognition,
    private cd: ChangeDetectorRef) {
    }

  deviceDisconnect() {
    this.bluetoothSerial.disconnect();
    this.showToast("Se ha desconectado del dispositivo");
    this.route.navigateByUrl('home');
  }

  async showToast(msg:any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: 'bottom'
    });

    await toast.present();
  }
}
