import { Component } from '@angular/core';

@Component(
    {
        selector: 'reddit',
        template: `
        <form class = "ui large form segment">
        <h3 class="ui header">Add title</h3>
        <div class="field">
        <div for="title">Title: </div>
        <div><input name ="title" #newTitle/> </div> 
        </div>
        <div class="field">
        <div for="link">Link: </div>
        <div><input name="link" #newLink/> </div> 
        </div>
        <button (click) = "addLinkToList(newTitle,newLink)" class="ui positive right floated button">Submit Link </button>
        </form>
        `
    }
)
export class RedditApp {
    addLinkToList(newTitle: HTMLInputElement, newLink: HTMLInputElement) {
        console.log(newTitle.value + "     " + newLink.value);
    }
    constructor() {

    }
}