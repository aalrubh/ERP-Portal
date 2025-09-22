import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { Panel } from "@shared/ui/panel/panel";
import { Card } from "@shared/ui/card/card";

@Component({
	imports: [CommonModule, JsonPipe, Panel, Card],
	selector: 'app-dashboard-dashboard',
	templateUrl: './dashboard.html',
	styleUrls: ['./dashboard.scss'],
	standalone: true
})

export class DashboardComponent {
	ROOT_URL: string = 'https://jsonplaceholder.typicode.com/posts';

	posts: any;
	constructor(private http: HttpClient) { }

	getPosts() {
		this.http.get(this.ROOT_URL).subscribe(data => {
			this.posts = data;
			console.log(this.posts);
		});
	}
}
