import { Component, ViewChild } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage {
  btnInput1: string;
  btnInput2: string ;
  btnInputA: string;
  btnInputB: string;
  btnInputC: string;
  btnInputD: string;
  checkedbtnsFirst:boolean;
  checkedbtnsSecond: boolean;
  @ViewChild('popover1') popover1;
  @ViewChild('popover2') popover2;
  isOpen1 = false;
  isOpen2 = false;
  constructor(private bluetoothSerial: BluetoothSerial,
    private toastController: ToastController,) {
     

    }

    presentPopover1(e: Event) {
      this.popover1.event = e;
      this.isOpen1 = true;
      const data1 = JSON.parse(localStorage.getItem('firstBtns'));
      if (data1) {
        this.btnInput1 = data1.btn1;
        this.btnInput2 = data1.btn2;
        this.checkedbtnsFirst = true;
      }
    }
    presentPopover2(e: Event) {
      this.popover2.event = e;
      this.isOpen2 = true;
      const data2 = JSON.parse(localStorage.getItem('secondBtns') );
      if (data2) {
        this.btnInputA = data2.btnA;
        this.btnInputB = data2.btnB;
        this.btnInputC = data2.btnC;
        this.btnInputD = data2.btnD;
        this.checkedbtnsSecond = true;
      }
    }
  checkSave1(value:any){
    if (value.detail.checked) {
      console.log('almacenar en local storage');
      this.checkedbtnsFirst = true;
      localStorage.setItem('firstBtns', JSON.stringify({
        btn1: this.btnInput1, 
        btn2: this.btnInput2, 
        }))
    }else{
      localStorage.removeItem('firstBtns')
    }
  }
  change1(change:any){
    this.checkedbtnsFirst = false;

  }
  checkSave2(value:any){
    if (value.detail.checked) {
      console.log('almacenar en local storage');
      this.checkedbtnsSecond = true;
      localStorage.setItem('secondBtns', JSON.stringify({
        btnA: this.btnInputA, 
        btnB: this.btnInputB, 
        btnC: this.btnInputC, 
        btnD: this.btnInputD, 
      }));
    }else{
      localStorage.removeItem('secondBtns')
    }
  }
  change2(change:any){
    this.checkedbtnsSecond = false;

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
}
