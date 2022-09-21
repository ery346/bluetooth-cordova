import { Component } from '@angular/core';
import { NameService } from '../service/name.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  nameDeviceConnected: string;
  
  constructor(private service: NameService) {
    this.nameDeviceConnected = this.service.showName();
  }


}
