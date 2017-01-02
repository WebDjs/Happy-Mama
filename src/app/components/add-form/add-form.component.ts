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

  listingItemForm: ItemListing = {
      title: '',
      category: 'Tърси',
      content: '',
      username: 'Pesjo',
      date: new Date().toLocaleTimeString(),
      isDeleted: false
    };
  @Output() listingItemCreated = new EventEmitter();
createListingItem() {
    const {title, category, content, username, date, isDeleted} = this.listingItemForm;
     if (title && category && content && username && date){
      this.listingItemCreated.next({title, category, content, username, date, isDeleted});
      this.listingItemForm.title= '',
      this.listingItemForm.category= 'Tърси',
      this.listingItemForm.content= '',
      this.listingItemForm.username= 'Pesjo',
      this.listingItemForm.date= new Date().toLocaleTimeString(),
      this.listingItemForm.isDeleted=false;
     }
  }

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

  get spy() {
    return JSON.stringify(this.listingItemForm);
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