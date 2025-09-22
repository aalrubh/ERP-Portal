import { Component } from '@angular/core';
import { Card } from '@shared/ui/card/card';
import { Panel } from "@shared/ui/panel/panel";
@Component({
  selector: 'app-human-resources-employee-directory',
  templateUrl: './employee-directory.html',
  styleUrls: ['./employee-directory.scss'],
  standalone: true,
  imports: [Panel, Card],
})
export class EmployeeDirectoryComponent {}