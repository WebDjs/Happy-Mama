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

  deleteTask(babysitter: any): Observable<any> {
    return this.http.delete(`/babysitters/${babysitter._id}`, this.options);
  }


  // listings
  getListings(): Observable<any> {
    return this.http.get('/listings').map(res => (res.json()));
  }

  addListing(listing: any): Observable<any> {
    return this.http.post('/listings', JSON.stringify(listing), this.options);
  }

  editListing(listing: any): Observable<any> {
    return this.http.put(`/listings/${listing._id}`, JSON.stringify(listing), this.options);
  }

  deleteListing(listing: any): Observable<any> {
    return this.http.delete(`/listings/${listing._id}`, this.options);
  }


  // forum-posts
  getForumPosts(): Observable<any> {
    return this.http.get('/forum-posts').map(res => (res.json()));
  }

  addForumPost(forumPost: any): Observable<any> {
    return this.http.post('/forum-posts', JSON.stringify(forumPost), this.options);
  }

  editForumPost(forumPost: any): Observable<any> {
    return this.http.put(`/forum-posts/${forumPost._id}`, JSON.stringify(forumPost), this.options);
  }

  deleteForumPost(forumPost: any): Observable<any> {
    return this.http.delete(`/forum-posts/${forumPost._id}`, this.options);
  }
}
