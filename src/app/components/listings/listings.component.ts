import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from '../../services/data.service';
import { AddFormComponent } from '../add-form/add-form.component';
import { ListingItemComponent } from '../listing-item/listing-item.component';
import { ItemListing } from '../../models/item.listing.model'

@Component({
  moduleId: module.id,
  selector: 'listings',
  styleUrls: ['./listings.component.css'],
  templateUrl: './listings.component.html'
})

export class ListingsComponent implements OnInit {
  listingItem: ItemListing;
  listings: ItemListing[] = [];
  title: string;
  category: string;
  content: string;
  username: string;
  date: string;
  isDeleted: boolean;
  id: string;


  constructor(private dataService: DataService) {
    this.dataService.getListings().subscribe(listings => { this.listings = listings });
    console.log('From constructor')
console.log(this.listings)
    this.listingItem = {
      title: '',
      category: '',
      content: '',
      username: '',
      date: '',
      isDeleted: false
    }
  }

  ngOnInit() {
    console.log(this.listings)
  }

  isSubmenuVisible: boolean = false;

  toggleSubmenu() {
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }

  isFormVisible: boolean = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  addListingItem(item: any): void {

    console.log(item)
    let newItemListing = {
      title: item.title,
      category: item.category,
      content: item.content,
      username: localStorage.getItem('username'),
      date: new Date().toLocaleTimeString(),
      isDeleted: false
    }

    console.log(JSON.stringify(newItemListing));

    this.dataService.addListingItem(newItemListing).subscribe(listingItem => {
      this.listings.push(listingItem);
      console.log(listingItem);
      this.title = '',
        this.category = '',
        this.content = '',
        this.username = localStorage.getItem('username'),
        this.date = new Date().toLocaleTimeString(),
        this.isDeleted = false
      this.dataService.getListings().subscribe(listings => { this.listings = listings; })
    });
  }

  removeListingItem(listingItem: any): void {
    console.log(listingItem);
    listingItem.isDeleted = true;
    let index = this.listings.findIndex(currentListingItem => currentListingItem.isDeleted === true);
    console.log(index);
    this.dataService.deleteListingItem(listingItem).subscribe((ok) => { console.log(ok); });
    this.listings.splice(index, 1);
  }


}
