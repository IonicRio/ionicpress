import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { WpProvider } from '../../providers/wp/wp';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [WpProvider]
})
export class DetailPage {
  post;
  constructor(public navParams: NavParams, private Wp: WpProvider) { }

  ionViewDidLoad() {
    this.Wp.getPost(this.navParams.get('id')).subscribe(
      data => {
        this.post = data;
      }
    );
  }

}
