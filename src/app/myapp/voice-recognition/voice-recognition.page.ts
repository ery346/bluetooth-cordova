import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ToastController } from '@ionic/angular';
import { ChangeDetectorRef } from "@angular/core";
@Component({
  selector: 'app-voice-recognition',
  templateUrl: './voice-recognition.page.html',
  styleUrls: ['./voice-recognition.page.scss'],
})
export class VoiceRecognitionPage  {
  matches: string[];
  constructor(private speechRecognition: SpeechRecognition,
              private bluetoothSerial: BluetoothSerial,
              private toastController: ToastController,
              private cd: ChangeDetectorRef) { }

  getPermissions(){
    this.speechRecognition.hasPermission().then((res:boolean) => {
      if (!res) {
        this.speechRecognition.requestPermission();
      }
    })
  }

  startListening(){
    let options = {language: 'es-MX'}
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      const data = matches[0].toLowerCase();
      this.sendData(data);
      this.cd.detectChanges();
    });
  }

  sendData(data:any) {
    this.bluetoothSerial.write(data).then(success => {
        this.showToast('Dato enviado');
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
    // stopListening(){
  //   this.speechRecognition.stopListening().then(() => {
  //   })
  // }
}
