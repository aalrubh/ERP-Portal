
/*
	This file will define the structure of contact information.
*/
import { Address } from "./address";
import { EmergencyContact } from "./emergency-contact";
import { EmailString, PhoneString } from "./types";

export interface ContactInfo {
	/*
		Email addresses
	*/
	primaryEmail: EmailString;
	secondaryEmail?: EmailString;

	/*
		Phone numbers
	*/
	primaryPhone?: PhoneString;
	secondaryPhone?: PhoneString;

	/* National Addresses */
	address?: Address;

	/* Emergency Contacts */
	emergencyContacts?: EmergencyContact[];
}