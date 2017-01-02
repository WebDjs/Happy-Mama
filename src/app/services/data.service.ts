import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

// users
  getUsers(): Observable<any> {
    return this.http.get('/users').map(res => (res.json()));
  }

  addUser(user: any): Observable<any> {
    return this.http.post('/users', JSON.stringify(user), this.options);
  }

// babysitters
  getBabysitters(): Observable<any> {
    return this.http.get('/babysitters').map(res => (res.json()));
  }

  addBabysitter(babysitter: any): Observable<any> {
    return this.http.post('/babysitters', JSON.stringify(babysitter), this.options);
  }

  editBabysitter(babysitter: any): Observable<any> {
    return this.http.put(`/babysitters/${babysitter._id}`, JSON.stringify(babysitter), this.options);
  }

  // deleteTask(babysitter: any): Observable<any> {
  //   return this.http.delete(`/babysitters/${babysitter._id}`, this.options);
  // }

// forumposts
  getForumPosts(): Observable<any> {
    return this.http.get('/forumposts').map(res => (res.json()));
  }
 
  addForumPost(forumpost: any): Observable<any> {
    return this.http.post('/forumposts', JSON.stringify(forumpost), this.options);
  }

  deleteForumPost(forumpost: any): Observable<any> {
    return this.http.put(`/forumposts/${forumpost._id}`, JSON.stringify(forumpost), this.options);
  }
  // listings

 getListings(): Observable<any> {
    return this.http.get('/listings').map(res => (res.json()));

  }

  addListingItem(listingItem: any): Observable<any> {
    return this.http.post('/listings', JSON.stringify(listingItem), this.options);
  }

   deleteListingItem(listinItem: any): Observable<any> {
    return this.http.delete(`/listings/${listinItem._id}`, this.options);
  }
}
