import { Component, inject } from '@angular/core';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box'
import { DxButtonComponent } from 'devextreme-angular/ui/button'
import { DxCheckBoxComponent } from 'devextreme-angular/ui/check-box'
import { Router } from '@angular/router';

@Component({
  selector: 'portal-login',
  imports: [DxTextBoxModule, DxButtonComponent, DxCheckBoxComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  private router = inject(Router);

  buttonClicked() {
    this.router.navigate(['/auth/register']);
  }
}
