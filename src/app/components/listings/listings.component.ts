import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ForumPost } from '../forum/forum-elements/forum.post';
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
  listings: ItemListing[] = [{
    title: '',
    category: 'Търси',
    content: 'Alalalal',
    username: 'Анонимен',
    date: '',
    isDeleted: false
  }];
  title: string;
  category: string;
  content: string;
  username: string;
  date: string;
  isDeleted: boolean;
  id: string;


  constructor(private dataService: DataService) {
    this.dataService.getListings().subscribe(listings => { this.listings = listings });
    // todo same with user
    this.listingItem = {
      title: '',
      category: 'Търси',
      content: '',
      username: 'Анонимен',
      date: '',
      isDeleted: false
    }
  }

  ngOnInit() {

  }

  isSubmenuVisible: boolean = false;

  toggleSubmenu() {
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }

  isFormVisible: boolean = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  addItemListing(): void {
    let newItemListing = {
      title: this.listingItem.title,
      category: this.listingItem.category,
      content: this.listingItem.content,
      username: this.listingItem.username,
      date: new Date().toLocaleTimeString(),
      isDeleted: false
    }
    console.log('addingItem');
    console.log(JSON.stringify(newItemListing));

    this.dataService.addListingItem(newItemListing).subscribe(listingItem => {
      this.listings.push(listingItem);
      this.title = '',
        this.category = 'Търси',
        this.content = '',
        this.username = 'Анонимен',
        this.date = '',
        this.isDeleted = false

    })

  }
}
