import { Injectable } from '@angular/core';
import { LocalStorageService } from './../local-storage/index.js';

@Injectable()
export class LogInService {
	currentUserName: string = 'Иванка';
	isLoggedUser: boolean = false;
	constructor(private localStorage: LocalStorageService) {
	}

	getUserData(): any {
		return {
			currentUserName: this.currentUserName,
			isLoggedUser: this.isLoggedUser
		}
	}

	setUserData(username: string): void {
		this.currentUserName = username;
		this.isLoggedUser = true;
	}
}
