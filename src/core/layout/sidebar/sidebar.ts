import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
	selector: 'portal-sidebar',
	imports: [RouterOutlet],
	templateUrl: './sidebar.html',
	styleUrl: './sidebar.scss'
})
export class Sidebar {
	//I expect an array that will work with an array that will be gotten from http. but for now load from json

}
