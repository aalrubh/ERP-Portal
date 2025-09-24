
/*
	This file will define the structure of emergency contact information.
*/

import { Address } from "./address";
import { Name } from "./name";
import { relationshipType } from "./types";

export interface EmergencyContact {
	name: Name;
	relationship: relationshipType;
	phone: string;
	email?: string;
	address?: Address;
}
