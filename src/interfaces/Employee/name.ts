
/*
	This interface represents a person's name structure.
*/

export interface Name {
  firstName: string;
  middleName?: string;
  familyName: string;

  preferredName?: string;

  prefix?: string;
  suffix?: string;
}
