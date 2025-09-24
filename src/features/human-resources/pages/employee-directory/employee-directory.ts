import { Component, ViewChild } from '@angular/core';
import { Panel } from "@shared/ui/panel/panel";
import Employees from './employees_sa.json';
import { Table } from "@shared/ui/table/table";
import { DxDataGridComponent } from "devextreme-angular/ui/data-grid";
import { DxiButtonComponent, DxiColumnComponent, DxoFilterPanelComponent, DxoSelectionComponent } from 'devextreme-angular/ui/nested';
@Component({
	selector: 'app-human-resources-employee-directory',
	templateUrl: './employee-directory.html',
	styleUrls: ['./employee-directory.scss'],
	standalone: true,
	imports: [Panel, Table, DxDataGridComponent, DxiColumnComponent, DxiButtonComponent, DxoSelectionComponent, DxoFilterPanelComponent],
})

export class EmployeeDirectoryComponent {
	employees: Employee[] = Employees as Employee[];
}

interface Employee {
	"full_name": string,
	"job_title": string,
	"employment_type": string,
	"status": string,
	"location": string,
	"email": string
}