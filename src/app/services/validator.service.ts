import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

	constructor() { }

	stringNotInRange(value: string, min: number, max: number): boolean {
		if (value.length < min || value.length > max) {
			return true;
		}
		return false;
	}

	stringNotContainIllicitChars(value: string): boolean {
		for (let ch of value) {
			if (ch === '@' || ch === '#' || ch === '!' || ch === '?') {
				return false;
			}
		}
		return true;
	}

	stringsNotSame(p: string, pC: string): boolean {
		if (p !== pC) {
			return true;
		}
		return false;
	}

	stringExistsInCollection(collection: string[], value: string) {
		if (collection.indexOf(value) !== -1) {
			return true;
		}
		return false;
	}
}
