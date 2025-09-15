import { bootstrapApplication } from '@angular/platform-browser';
import { ErpShell } from '@core/layout/erp-shell/erp-shell';

bootstrapApplication(ErpShell)
  .catch(err => console.error(err));
