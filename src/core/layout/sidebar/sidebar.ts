import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { menuItem } from './components/menu-item/menu-item.interface';
import sidebarNodes from './sidebar_nodes.json';
import { MenuItemComponent } from "./components/menu-item/menu-item"
import { MatIconModule } from "@angular/material/icon"
@Component({
	selector: 'portal-sidebar',
	standalone: true,
	imports: [MenuItemComponent, MatIconModule],
	templateUrl: './sidebar.html',
	styleUrls: ['./sidebar.scss']
})
export class Sidebar {
	// Accept collapsed state from parent container
	@Input() isCollapsed = false;
	@Output() requestOpen = new EventEmitter();
	// For now load from local JSON; later can be provided via HTTP
	menu_nodes: menuItem[] = sidebarNodes as menuItem[];

	requestOpenMenu() {
		this.requestOpen.emit();
	}
}


