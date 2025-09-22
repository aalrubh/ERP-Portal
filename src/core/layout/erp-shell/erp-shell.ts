import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router'
import { Topbar } from "../top-bar/topbar";

@Component({
	selector: 'portal-erp-shell',
	standalone: true,
	imports: [Sidebar, Header, Footer, RouterOutlet, Topbar],
	templateUrl: './erp-shell.html',
	styleUrls: ['./erp-shell.scss']
})
export class ErpShell {
	/* Placeholders... */
	employee_name: string = "Bilal Zidan";
	employee_profile_picture: string = "images/dwd.jpg";
	
	title !: string;
	collapsed = true;

	onActivate(component: unknown) {
		queueMicrotask(() => { 
			console.log(component?.constructor?.name);
			
			this.title = component?.constructor?.name ? makeTitleFromComponentName(component?.constructor?.name) : 'unknown'; });
	}
}

function makeTitleFromComponentName(name: string): string {
	return name.replace(/Component$/, '').replace(/([a-z])([A-Z])/g, '$1 $2');
}
