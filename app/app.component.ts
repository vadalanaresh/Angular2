import { Component } from '@angular/core';
import { RedditApp } from './reddit.component';
import { RedditArticle } from "./reddit-article.component";

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
  <reddit> </reddit>
  <reddit-article></reddit-article>`,
  directives: [RedditApp, RedditArticle]
})
export class AppComponent { }
