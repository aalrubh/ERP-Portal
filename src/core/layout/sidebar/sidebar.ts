import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { menuItem } from './components/menu-item/menu-item.interface';
import sidebarNodes from './sidebar_nodes.json';
import { MenuItemComponent } from "./components/menu-item/menu-item"
@Component({
	selector: 'portal-sidebar',
	standalone: true,
	imports: [NgClass, MenuItemComponent],
	templateUrl: './sidebar.html',
	styleUrls: ['./sidebar.scss']
})
export class Sidebar {
	// Accept collapsed state from parent container
	@Input() isSidebarCollapsed = false;

	isCollapsed : boolean = false;
	// For now load from local JSON; later can be provided via HTTP
	menu_nodes: menuItem[] = sidebarNodes as menuItem[];



}


