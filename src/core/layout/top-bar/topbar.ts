import { Component, Input } from '@angular/core';
import { DxDropDownButtonModule } from 'devextreme-angular';

@Component({
  selector: 'portal-topbar',
  imports: [DxDropDownButtonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class Topbar {
  employee_name: string = "Bilal Zidan";
  employee_profile_picture: string = "images/dwd.jpg";

  @Input() title !: string;

  menuitems = [
    {
      text: "Profile",
      icon: "user"
    },
    {
      text: "Settings",
      icon: "settings"
    },
    {
      text: "Logout",
      icon: "runner"
    }
  ];
}
