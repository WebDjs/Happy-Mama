import { Component, Output, Input} from '@angular/core'

// import {Category}from '../../models/category.model'
// import {Ad}from '../../models/ad.model'
//import {ItemListing}from'../../models/item-listing.model'

@Component({
  moduleId: module.id,
  selector: 'item',
  styleUrls: ['./item.component.css'],
  templateUrl: './item.component.html'
})

export class Item {
  
  
@Input() itemData =  {
    title: '',
    content: '',
    author: ''//,
   // date: ''
  }
};
  

 
