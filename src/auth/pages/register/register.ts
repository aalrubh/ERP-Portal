import { Component } from '@angular/core';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box'
import { DxButtonComponent } from 'devextreme-angular/ui/button'
import { DxCheckBoxComponent } from 'devextreme-angular/ui/check-box'
@Component({
  selector: 'portal-register',
  imports: [DxTextBoxModule, DxButtonComponent, DxCheckBoxComponent],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {

}
