import { User } from './user.model';
import { BabysitterDetails } from './babysitter.details.model';

export interface Babysitter {
    user: User;
    town: string;
    city: string;
    age: number;
    isFemale: boolean;
    isSmoker: boolean;
    isDriver: boolean;
    babysitterDetails: BabysitterDetails;
}
