import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WpProvider {
  private base = 'http://localhost/wp-json/wp/v2';

  constructor(public http: HttpClient) { }

  getPosts() {
    return this.http.get(this.base + '/posts');
  }

  getPost(id: number) {
    return this.http.get(this.base + '/posts/' + id);
  }
}
