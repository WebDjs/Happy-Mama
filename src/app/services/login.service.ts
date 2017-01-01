import { Injectable } from '@angular/core';
import { LocalStorageService } from './../local-storage/local-storage.service';

@Injectable()
export class LogInService {
	isLoggedUser: boolean;
	currentUserName: string;
	constructor(private localStorage: LocalStorageService) {
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
