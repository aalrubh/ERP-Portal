import { Component, Input } from '@angular/core';

@Component({
  selector: 'portal-panel',
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.scss'
})
export class Panel {
  @Input() header: boolean = false;
  @Input() footer: boolean = false;

}

