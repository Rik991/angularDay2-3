import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  posts: Post[] = [];
  indexRandom: number = 0;
  arrayOther: Post[] = [];

  ngOnInit() {
    //metodo lanciato al caricamento del componente (per usare ts)
    fetch('db.json')
      .then((res) => res.json())
      .then((dati) => {
        this.posts = dati.posts;
        console.log(this.posts);
        this.indexRandom = Math.floor(Math.random() * 29);
        for (let i = 4; i < this.posts.length; i++) {
          this.arrayOther.push(this.posts[i]);
        }
      });
  }
}
