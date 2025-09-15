import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'portal-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar],
  templateUrl: './erp-shell.html',
  styleUrls: ['./erp-shell.scss']
})
export class ErpShell {
constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
  iconReg.addSvgIconResolver((name, namespace) => {
    // supports namespaces like "outline:dashboard"
    const ns = namespace ? `${namespace}/` : '';
    return sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${ns}${name}.svg`);
  });
}
}
