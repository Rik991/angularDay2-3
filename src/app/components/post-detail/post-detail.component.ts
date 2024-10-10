import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  constructor(private route: ActivatedRoute) {}
  post!: Post;
  posts: Post[] = [];

  ngOnInit() {
    //metodo lanciato al caricamento del componente (per usare ts)
    fetch('db.json')
      .then((res) => res.json())
      .then((dati) => {
        this.posts = dati.posts;

        //recupero i dettagli della rotta
        this.route.params.subscribe((params: any) => {
          const singlePost = this.posts.find((p) => p.id == params.id);
          if (singlePost) {
            this.post = singlePost;
          }
        });
      });
  }
}
