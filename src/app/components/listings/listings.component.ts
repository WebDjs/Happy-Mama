import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ForumPost } from '../forum/forum-elements/forum.post';
import { AddFormComponent } from '../add-form/add-form.component';
import{ListingItemComponent}from'../listing-item/listing-item.component';

// import { Category } from '../../models/category.model';
// import { ItemListing } from '../../models/item-listing.model';

@Component({
  moduleId: module.id,
  selector: 'ad',
  styleUrls: ['./listings.component.css'],
  templateUrl: './listings.component.html'
})

export class ListingsComponent {
  // categories: Category[]
  // let sampleCategories:Category [] =[{}]
  listings: any[];

  constructor(private dataService: DataService) {

    this.listings = [
      {
        title: 'Спешно za 5 god.  dete',
        content: `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,
        username: 'Anonim1',
        date: '123',
      },

      {
        title: 'Спешно za 2 god.  dete',
        content: `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,
        username: 'Anonim2',
        date: '1234',
      },

      {
        title: 'Спешно za 12 god.  dete',
        content: `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,

        username: 'Anonim3',
        date: '27/0302'
      }];

  }
  isSubmenuVisible: boolean = false;

  toggleSubmenu() {
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }

   isFormVisible: boolean = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }



@Output() adRemoved = new EventEmitter ();
  // showInputForm() {
  //   console.log('Done');
  // }


}
