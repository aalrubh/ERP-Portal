/*
	Made by: Ali Al Rubh
	Date: 25-09-2025

	Purpose:
	This file will define the http service that will be used to connect to the backend
*/

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment'; // <??" not .development
import { Observable } from 'rxjs';

const APP_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})

export class Http {
	private http = inject(HttpClient);

	get<T>(endpoint: string): Observable<T> {
		return this.http.get<T>(`${APP_URL}${endpoint}`);
	}

	post<T>(endpoint: string, body: unknown): Observable<T> {
		return this.http.post<T>(`${APP_URL}${endpoint}`, body);
	}

	put<T>(endpoint: string, body: unknown): Observable<T> {
		return this.http.put<T>(`${APP_URL}${endpoint}`, body);
	}

	delete<T>(endpoint: string): Observable<T> {
		return this.http.delete<T>(`${APP_URL}${endpoint}`);
	}
}
