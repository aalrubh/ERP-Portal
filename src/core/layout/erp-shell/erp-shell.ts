import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'portal-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './erp-shell.html',
  styleUrls: ['./erp-shell.scss']
})
export class ErpShell {

}
