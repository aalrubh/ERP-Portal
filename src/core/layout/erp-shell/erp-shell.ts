import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'portal-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar],
  templateUrl: './erp-shell.html',
  styleUrls: ['./erp-shell.scss']
})
export class ErpShell {

}
