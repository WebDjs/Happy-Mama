import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemListing } from '../../models/item.listing.model';
import { FormsModule } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'add-form',
  styleUrls: ['./add-form.component.css'],
  templateUrl: './add-form.component.html'
})

export class AddFormComponent {

  listingItemForm: any;

  constructor() {
    
    this.listingItemForm = {
      title: '',
      category: '',
      content: '',
      username: localStorage.getItem('username'),
      date: new Date(),
      isDeleted: false
    };
  }
  @Output() listingItemCreated = new EventEmitter();

  addListingItem() {
    const {title, category, content, username, date, isDeleted} = this.listingItemForm;
    if (title && category && content && username && date && !isDeleted) {
      this.listingItemCreated.next({ title, category, content, username, date, isDeleted });
      this.listingItemForm.title = '';
        this.listingItemForm.category = '';
        this.listingItemForm.content = '';
    }
  }

  isFormVisible: boolean = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}