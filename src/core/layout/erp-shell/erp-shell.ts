import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'portal-erp-shell',
  standalone: true,
  imports: [Sidebar, Header, Footer, RouterOutlet],
  templateUrl: './erp-shell.html',
  styleUrls: ['./erp-shell.scss']
})
export class ErpShell {

  /* Placeholders ...*/
  title : string = "Dashboard";
  employee_name : string = "Bilal Zidan";
  employee_profile_picture : string = "images/dwd.jpg";
}
