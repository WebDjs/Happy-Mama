import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getBabysitters(): Observable<any> {
    return this.http.get('/babysitters').map(res => res.json());
  }

  addBabysitter(babysitter: any): Observable<any> {
    return this.http.post('/babysitter', JSON.stringify(babysitter), this.options);
  }

  editBabysitter(babysitter: any): Observable<any> {
    return this.http.put(`/cat/${babysitter._id}`, JSON.stringify(babysitter), this.options);
  }

  deleteBabysitter(babysitter: any): Observable<any> {
    return this.http.delete(`/cat/${babysitter._id}`, this.options);
  }
}
