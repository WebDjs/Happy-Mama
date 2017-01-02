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
  listings: ItemListing[] = [{
      
        title: 'Спешно za 5 god.  dete',
        content: `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,
		 category: 'Търси',
        username: 'Anonim1',
        date: '123',
		 isDeleted: false
      },

      {
        title: 'Спешно za 2 god.  dete',
        content: `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,
        category: 'Търси',
	   username: 'Anonim2',
        date: '1234',
		 isDeleted: false
      },

      {
        title: 'Спешно za 12 god.  dete',
        content: `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,
 category: 'Търси',
        username: 'Anonim3',
        date: '27/0302',
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
  //  this.dataService.getListings().subscribe(listings => { this.listings = listings });
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


  createListingItem(listingItem:ItemListing) {
    console.log(listingItem);
    this.listings.push(listingItem)
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

    // this.dataService.addListingItem(newItemListing).subscribe(listingItem => {
    //   this.listings.push(listingItem);
    //   this.title = '',
    //     this.category = 'Търси',
    //     this.content = '',
    //     this.username = 'Анонимен',
    //     this.date = '',
    //     this.isDeleted = false
    // })
  }
}
