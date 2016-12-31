import { Injectable } from '@angular/core';

@Injectable()
export class LogInService {
	isLoggedUser: boolean;
	currentUserName: string;
	constructor() {
		this.isLoggedUser = false;
		this.currentUserName = 'Иванка';
	}

	saveUserName(username: string): void {
		this.currentUserName = username;
		this.isLoggedUser = true;
	}

	getUserData(): any {
		return {
			currentUserName: this.currentUserName,
			isLoggedUser: this.isLoggedUser
		}
	}

}
