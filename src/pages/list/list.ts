import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WpProvider } from '../../providers/wp/wp';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [WpProvider]
})
export class ListPage {
  posts;
  constructor(private Wp: WpProvider, private NavController: NavController) { }

  ionViewDidLoad() {
    this.posts = this.Wp.getPosts();
  }

  goToNews(id) {
    this.NavController.push(DetailPage, {
      id: id
    });
  }

}
