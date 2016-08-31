"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var RedditArticle = (function () {
    function RedditArticle() {
        this.votes = 3;
        this.link = "#";
        this.title = "Angular 2";
    }
    RedditArticle.prototype.VoteUp = function () {
        this.votes += 1;
    };
    RedditArticle.prototype.VoteDown = function () {
        this.votes -= 1;
    };
    RedditArticle = __decorate([
        core_1.Component({
            selector: 'reddit-article',
            host: { clas: 'row' },
            template: "\n                    <div class=\"four wide column center alligned votes\"> \n                            <div class=\"ui statistics\">\n                                <div class=\"value\">\n                                {{votes}}\n                                </div>\n                                <div class=\"label\">\n                                Points\n                                </div>\n                            </div>\n                            <div class=\"twele wide column\">\n                                <a class=\"ui large header\" href=\"{{link}}\">{{title}}</a>\n                                <ul class=\"ui big horizontal list voters\">\n                                    <li>\n                                        <a href (click)=\"VoteUp()\">\n                                            <i class=\"arrow up icon\"></i>Up Vote\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href (click)=\"VoteDown()\">\n                                            <i class=\"arrow down icon\"></i>\n                                            Down Vote \n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                    </div>\n                    "
        }), 
        __metadata('design:paramtypes', [])
    ], RedditArticle);
    return RedditArticle;
}());
exports.RedditArticle = RedditArticle;
//# sourceMappingURL=reddit-article.component.js.map