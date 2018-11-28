 import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class SearchBarService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) {}

    getId = (): string => 'searchBars';

    getTitle = (): string => 'Search bars';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Simple", "theme"  : "layout1"},
          {"title" : "Field + header", "theme"  : "layout2"},
          {"title" : "Field + header 2", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // SEARCH - Simple data
     getDataForLayout1 = (): any => {
         return {
             "headerTitle": "Simple",
             "titleSearch": "Research",
             "items": [
                 {
                     "id": 1,
                     "category": "best offer",
                     "image": "assets/images/background/9.jpg",
                     "title": "Open Air Concert",
                     "subtitle": "West Avenue, NYC",
                     "button": "$135.99",
                 },
                 {
                     "id": 2,
                     "category": "main event",
                     "image": "assets/images/background/17.jpg",
                     "title": "Venice Travel",
                     "subtitle": "Bridge, Venice",
                     "button": "$312.99",
                 },
                 {
                     "id": 3,
                     "category": "best tourt",
                     "image": "assets/images/background/12.jpg",
                     "title": "Hong Kong’s MTR",
                     "subtitle": "Kowloon Bay, Kowloon",
                     "button": "$213.45",
                 },
                 {
                     "id": 4,
                     "category": "best events",
                     "image": "assets/images/background/29.jpg",
                     "title": "Most Popular Bridges",
                     "subtitle": "Guilin, Kweilin",
                     "button": "$338.60",
                 },
                 {
                     "id": 5,
                     "category": "best events",
                     "image": "assets/images/background/28.jpg",
                     "title": "London Bridge",
                     "subtitle": "Hyde Park, London",
                     "button": "$410.85",
                 },
                 {
                     "id": 6,
                     "category": "best events",
                     "image": "assets/images/background/26.jpg",
                     "title": "New York City Subway",
                     "subtitle": "West Avenue, NYC",
                     "button": "$516.55",
                 }
             ]
         };
    };

    // SEARCH - Field + header data
    getDataForLayout2 = (): any => {
        return {
            "headerTitle": "Field + header",
            "headerImage": "assets/images/background/7.jpg",
            "items": [
                {
                    "title": "Theresa Mason",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/images/avatar/10.jpg",
                    "button": "GET"
                },
                {
                    "title": "Samantha Kennedy",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/images/avatar/11.jpg",
                    "button": "GET"
                },
                {
                    "title": "Ray Clarke",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/images/avatar/12.jpg",
                    "button": "GET"
                },
                {
                    "title": "Fiona Edwards",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/images/avatar/13.jpg",
                    "button": "GET"
                },
                {
                    "title": "Rebecca Reid",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/images/avatar/14.jpg",
                    "button": "GET"
                },
                {
                    "title": "Victoria Simpson",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/images/avatar/15.jpg",
                    "button": "GET"
                },
                {
                    "title": "Martin Mason",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/images/avatar/16.jpg",
                    "button": "GET"
                },
                {
                    "title": "Jake Taylor",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/images/avatar/17.jpg",
                    "button": "GET"
                }
            ]
        };
    };

    // SEARCH - Field + header 2 data
    getDataForLayout3 = (): any => {
        return {
            "headerTitle": "Field + header 2",
            "title": "Search Friends",
            "headerImage": "assets/images/background/7.jpg",
            "items": [
                {
                    "id": 1,
                    "title": "Matthew Morris",
                    "subtitle": "@matthew",
                    "detail": "Berlin",
                    "avatar": "assets/images/avatar/22.jpg"
                },
                {
                    "id": 2,
                    "title": "Nick Evans",
                    "subtitle": "@nick",
                    "detail": "Casablanca",
                    "avatar": "assets/images/avatar/23.jpg"
                },
                {
                    "id": 3,
                    "title": "Abbie Wilson",
                    "subtitle": "@abbie453",
                    "detail": "Cape Town",
                    "avatar": "assets/images/avatar/24.jpg"
                },
                {
                    "id": 4,
                    "title": "Laura Sarabia",
                    "subtitle": "@laura",
                    "detail": "New Taipei City",
                    "avatar": "assets/images/avatar/19.jpg"
                },
                {
                    "id": 5,
                    "title": "Lizzie Rose",
                    "subtitle": "@lizzie",
                    "detail": "Jakarta",
                    "avatar": "assets/images/avatar/20.jpg"
                },
                {
                    "id": 6,
                    "title": "Melissa Morris",
                    "subtitle": "@melissa",
                    "detail": "São Paulo",
                    "avatar": "assets/images/avatar/21.jpg"
                },
                {
                    "id": 7,
                    "title": "Dominic Allen",
                    "subtitle": "@dominic",
                    "detail": "Guangzhou",
                    "avatar": "assets/images/avatar/16.jpg"
                },
                {
                    "id": 8,
                    "title": "Heather Clark",
                    "subtitle": "@heather",
                    "detail": "Shanghai",
                    "avatar": "assets/images/avatar/17.jpg"
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            'onTextChange': function(text: any) {
                  that.toastCtrl.presentToast(text);
            },
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            }
        };
    };

        prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('searchBars/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
