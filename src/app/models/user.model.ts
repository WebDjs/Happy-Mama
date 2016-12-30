import { UserDetails } from './user.details.model';

export interface User {
	userName: string;
	password: string;
	email: string;
	isBabysitter: boolean;
	details: UserDetails;
};
