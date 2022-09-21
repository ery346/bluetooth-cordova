import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  deviceName: string;
  constructor() { }

  getName(name: string){
    this.deviceName = name;
  }
  showName(){
    console.log(this.deviceName);
    
    return this.deviceName ;
  }
}
