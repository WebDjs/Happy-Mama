import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'listing-item',
  styleUrls: ['./listing-item.component.css'],
  templateUrl: './listing-item.component.html'
})
export class ListingItemComponent {
  @Input() itemData = {
    title: '',
    content: '',
    username: '',
    date: ''
  }
 
   @Output() deleteItemListing = new EventEmitter();

  removeListingItem(){
    console.log('Deleted');
    this.deleteItemListing.next();
  }
}
