import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ForumPost } from '../forum/forum-elements/forum.post';
import { AddFormComponent } from '../add-form/add-form.component';

// import { Category } from '../../models/category.model';
// import { ItemListing } from '../../models/item-listing.model';

@Component({
  moduleId: module.id,
  selector: 'add',
  styleUrls: ['./listings.component.css'],
  templateUrl: './listings.component.html'
})

export class ListingsComponent {
  // categories: Category[]
  // let sampleCategories:Category [] =[{}]
  ads: any[];

  constructor(private dataService: DataService) {

    this.ads = [
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

  showInputForm() {
    console.log('Done');
  }
}
