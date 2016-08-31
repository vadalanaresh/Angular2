import { Component } from '@angular/core';

@Component(
    {
        selector: 'reddit-article',
        host: { clas: 'row' },
        template: `
                    <div class="four wide column center alligned votes"> 
                            <div class="ui statistics">
                                <div class="value">
                                {{votes}}
                                </div>
                                <div class="label">
                                Points
                                </div>
                            </div>
                            <div class="twele wide column">
                                <a class="ui large header" href="{{link}}">{{title}}</a>
                                <ul class="ui big horizontal list voters">
                                    <li>
                                        <a href (click)="VoteUp()">
                                            <i class="arrow up icon"></i>Up Vote
                                        </a>
                                    </li>
                                    <li>
                                        <a href (click)="VoteDown()">
                                            <i class="arrow down icon"></i>
                                            Down Vote 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    `
    }
)
export class RedditArticle {
    votes: number;
    link: string;
    title: string;
    constructor() {
        this.votes = 3;
        this.link = "#";
        this.title = "Angular 2";
    }
    VoteUp() {
        this.votes += 1;
    }
    VoteDown() {
        this.votes -= 1;
    }
}