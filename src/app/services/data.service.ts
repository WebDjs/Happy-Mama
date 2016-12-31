import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  //==========================
  getUsers(): Observable<any> {
    return this.http.get('/users').map(res => (res.json()));
  }

  addUser(user: any): Observable<any> {
    return this.http.post('/users', JSON.stringify(user), this.options);
  }

  //==========================
  getBabysitters(): Observable<any> {
    return this.http.get('/babysitters').map(res => (res.json()));
  }

  addBabysitter(babysitter: any): Observable<any> {
    return this.http.post('/babysitters', JSON.stringify(babysitter), this.options);
  }

  editBabysitter(babysitter: any): Observable<any> {
    return this.http.put(`/babysitters/${babysitter._id}`, JSON.stringify(babysitter), this.options);
  }

  getForumPosts(): Observable<any> {
    return this.http.get('/forumposts').map(res => (res.json()));
  }

  addForumPost(forumpost: any): Observable<any> {
    return this.http.post('/forumposts', JSON.stringify(forumpost), this.options);
  }

  // deleteTask(babysitter: any): Observable<any> {
  //   return this.http.delete(`/babysitters/${babysitter._id}`, this.options);
  // }

  getAds(ads: any): Observable<any> {
    return this.http.get('/listings').map(res => (res.json()));
  }

  addAd(ad: any): Observable<any> {
    return this.http.post('/listings', JSON.stringify(ad), this.options);

  }
}
