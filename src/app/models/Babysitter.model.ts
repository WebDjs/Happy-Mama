import { User } from './user.model';
import { Like } from './like.model';
import { BabysitterDetails } from './babysitter.details.model';

export class Babysitter {
    user: User;
    town: string;
    city: string;
    age: number;
    isFemale: boolean;
    isSmoker: boolean;
    isDriver: boolean;
    likes: Like;
    babysitterDetails: BabysitterDetails;
}
