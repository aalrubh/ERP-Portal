
/*
	This file defines the structure of address information.
*/

export interface Address {
	street: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
	ShortenedAddressCode?: string;
}