import { Component } from '@angular/core';
import { ForumPost } from '../forum/forum-elements/forum.post';

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

  posts: any[];
  title: string;
  constructor() {
    this.title = 'Pepi';
    this.posts = [
      {
        title: 'Спешно za 5 god.  dete',
        postContent:  `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,
        user: 'Anonim1',
        date: '123',
      },

      {
        title: 'Спешно za 2 god.  dete',
        postContent:  `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,
        user: 'Anonim2',
        date: '1234',
      },

      {
        title: 'Спешно za 12 god.  dete',
        postContent: `Агенция за детегледачи/чки "АБЕЦЕ Комюникейшън" търси за свои клиенти, 
        живеещи в гр. София, кв. Слатина, Детегледач/ка / домашен/на помощник/ца - почасови грижи 
        за дете на 1 г. и 4 месеца и помощ в домакинството.`,

        user: 'Anonim3',
        date: '27/0302'
      }];
  }
}

