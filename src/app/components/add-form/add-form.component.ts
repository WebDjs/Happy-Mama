import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemListing } from '../../models/item.listing.model';
import { FormsModule } from '@angular/forms';

import{}from '../../models/item.listing.model'

@Component({
  moduleId: module.id,
  selector: 'add-form',
  styleUrls: ['./add-form.component.css'],
  templateUrl: './add-form.component.html'
})

export class AddFormComponent {

  listingItemForm: ItemListing = {
    title: '',
    category: '',
    content: '',
    username: localStorage.getItem('username'),
    date: new Date().toLocaleTimeString(),
    isDeleted: false
  };
  @Output() listingItemCreated = new EventEmitter();
  addListingItem() {
    const {title, category, content, username, date, isDeleted} = this.listingItemForm;
    if (title && category && content && username && date && !isDeleted) {
      this.listingItemCreated.next({ title, category, content, username, date, isDeleted });
      console.log("Ami sega?")

    }
  }
// TODO
  // constructor() {
  //   this.listingItemForm = {
  //     title: '',
  //     category: 'Tърси',
  //     content: '',
  //     username: 'Pesjo',
  //     date: new Date().toLocaleTimeString(),
  //     isDeleted: false
  //   };
  // }
  // @Input

  isFormVisible: boolean = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  // newListingItemForm = {
  //   title: '',
  //   category: 'Tърси',
  //   postedOn: new Date().toLocaleTimeString(),
  //   author: 'Pesjo',
  //   content: '',
  //   isDeleted: false
  // }
}