/*
	Made by: Ali Al Rubh
	Date: 25-09-2025

	Purpose:
	This file will define the http service that will be used to connect to the backend
*/

import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
	HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment'; // <??" not .development
import { catchError, throwError, Observable } from 'rxjs';

const APP_URL = environment.apiUrl;

type Primitive = string | number | boolean;
type ParamsInput = HttpParams | Record<string, Primitive | ReadonlyArray<Primitive>>;
type HeadersInput = HttpHeaders | Record<string, string>;
type RequestOptions = {
	params?: ParamsInput;
	headers?: HeadersInput;
	withCredentials?: boolean;
};
type DeleteOptions = RequestOptions & { body?: unknown };

@Injectable({ providedIn: 'root' })
export class Http {
	private http = inject(HttpClient);

	get<T>(endpoint: string, options?: RequestOptions): Observable<T> {
		return this.http
			.get<T>(`${APP_URL}${endpoint}`, this.buildOptions(options))
			.pipe(catchError(this.handleError));
	}

	post<T>(endpoint: string, body: unknown, options?: RequestOptions): Observable<T> {
		return this.http
			.post<T>(`${APP_URL}${endpoint}`, body, this.buildOptions(options))
			.pipe(catchError(this.handleError));
	}

	put<T>(endpoint: string, body: unknown, options?: RequestOptions): Observable<T> {
		return this.http
			.put<T>(`${APP_URL}${endpoint}`, body, this.buildOptions(options))
			.pipe(catchError(this.handleError));
	}

	patch<T>(endpoint: string, body: unknown, options?: RequestOptions): Observable<T> {
		return this.http
			.patch<T>(`${APP_URL}${endpoint}`, body, this.buildOptions(options))
			.pipe(catchError(this.handleError));
	}

	delete<T>(endpoint: string, options?: DeleteOptions): Observable<T> {
		const { body, ...restOptions } = options ?? {};
		const httpOptions = this.buildOptions(restOptions);
		const deleteOptions = body !== undefined ? { ...httpOptions, body } : httpOptions;

		return this.http
			.delete<T>(`${APP_URL}${endpoint}`, deleteOptions)
			.pipe(catchError(this.handleError));
	}

	private buildOptions(options?: RequestOptions) {
		if (!options) {
			return {};
		}

		const httpOptions: {
			params?: ParamsInput;
			headers?: HttpHeaders;
			withCredentials?: boolean;
		} = {};

		if (options.params) {
			httpOptions.params = options.params;
		}

		if (options.headers) {
			httpOptions.headers =
				options.headers instanceof HttpHeaders
					? options.headers
					: new HttpHeaders(options.headers);
		}

		if (typeof options.withCredentials === 'boolean') {
			httpOptions.withCredentials = options.withCredentials;
		}

		return httpOptions;
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('Client/network error:', error.error.message);
		} else {
			console.error(`Backend ${error.status}:`, error.error);
		}
		return throwError(() => ({
			message: 'Something went wrong, please try again later.',
			status: error.status,
			original: error
		}));
	}
}
