import { Component, Input } from '@angular/core';

@Component({
  selector: 'portal-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() image: boolean = false;
  @Input() imageSrc : string = "";
  @Input() subHeadline: boolean = false;
  @Input() footer: boolean = false;
}
