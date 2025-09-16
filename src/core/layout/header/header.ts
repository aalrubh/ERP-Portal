import { Component } from '@angular/core';

@Component({
  selector: 'portal-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  company_logo : string = "./clogo.png";
  company_name : string = "Ironcrest Industries";
}
