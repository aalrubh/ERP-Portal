
/*
	This file defines the structure of employee information.
*/

import { ContactInfo } from "./contact-information";
import { Name } from "./name";

export interface employee {

	/* General Information */
	nationalID: number;
	employeeID: string;

	name: Name;
	bloodType?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
	contactInfo: ContactInfo;
	birthDate: Date;

	/* Job Information */
	department: string;
	position: string;
	status: 'Active' | 'Inactive' | 'On Leave';
	location: string;
	hireDate: Date;


	/* Additional Information */
	profilePictureUrl?: string;

	/* Audit Information */
	createdAt: Date;
	updatedAt: Date;
	createdBy: string;
	updatedBy: string;
}

export interface Access {
  accounts: Array<{
    system: string;
    username?: string;
    roles?: string[];
    status?: 'Active' | 'Suspended' | 'Revoked';
  }>;
  badges?: Array<{
    site: string;
    badgeIdMasked?: string;
  }>;
}