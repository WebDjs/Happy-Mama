import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5.js';

@Injectable()
export class HashingService {

  constructor() { }

  generateHash(value: string): string {
    return Md5.hashAsciiStr(value).toString();
  }
}
