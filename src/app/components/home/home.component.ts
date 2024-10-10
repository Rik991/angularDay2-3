import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];
  indexRandom: number = 0;
  arrayFour: Post[] = [];

  ngOnInit() {
    //metodo lanciato al caricamento del componente (per usare ts)
    fetch('db.json')
      .then((res) => res.json())
      .then((dati) => {
        this.posts = dati.posts;
        console.log(this.posts);
        this.indexRandom = Math.floor(Math.random() * 29);
        for (let i = 0; i < 4; i++) {
          this.arrayFour.push(this.posts[i]);
        }
      });
  }
}
