import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ActionSheetService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'actionSheet';

    getTitle = (): string => 'Action Sheet';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Basic", "theme": "layout1" },
            { "title": "News", "theme": "layout2" },
            { "title": "With Text Header", "theme": "layout3" }
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // ACTION-SHEET - Basic data
    getDataForLayout1 = (): any => {
        return {
            "headerTitle": "Basic",
            "headerImage": "assets/images/background/26.jpg",
            "shareIcon": "more",
            // Action Sheet button
            "actionSheet": {
                "buttons": [
                    {
                        "text": "Mark as read",
                        "role": "destructive"
                    },
                    {
                        "text": "Follow author"
                    },
                    {
                        "text": "Read more info"
                    },
                    {
                        "text": "More from category"
                    },
                    {
                        "text": "Cancel",
                        "role": "cancel"
                    }
                ]
            },
            "items": [
                {
                    "id": 1,
                    "title": "Super & Black",
                    "subtitle": "Available Now",
                    "category": "NEW OFFER",
                    "button": "$63.99",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                    "productDescriptions": [
                        {
                            "id": 1,
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        },
                        {
                            "id": 2,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        },
                        {
                            "id": 3,
                            "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        },
                        {
                            "id": 4,
                            "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        }
                    ]
                }
            ]
        }
    };

    // ACTION-SHEET - News data
    getDataForLayout2 = (): any => {
        return {
            "headerTitle": "News",
            "headerImage": "assets/images/background/3.jpg",
            "title": "World’s first ecological high-rise, completed in 2018",
            "subtitle": "by Victoria Kuijpers",
            "category": "Commerzbank",
            "avatar": "assets/images/avatar/20.jpg",
            "shareIcon": "more",
            "description": "In addition Arup provided consulting services regarding traffic and wind studies as well as geotechnical and fire engineering and up to scheme design stage.",
                // Action Sheet button
                "actionSheet": {
                "buttons": [
                    {
                        "text": "Mark as read",
                        "role": "destructive"
                    },
                    {
                        "text": "Follow author"
                    },
                    {
                        "text": "Read more info"
                    },
                    {
                        "text": "More from category"
                    },
                    {
                        "text": "Cancel",
                        "role": "cancel"
                    }
                ]
            },
            "items": [
                {
                    "id": 1,
                    "title": "Eco-high-rise",
                    "subtitle": "The building has a natural ventilation system with individually openable windows as well as transverse ventilation through the sky gardens and the atrium. Thanks to its eco-friendly design the building was branded."
                },
                {
                    "id": 2,
                    "title": "This new high-rise building is triangular in plan.",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 3,
                    "title": "Commerzbank tower in the financial district of Frankfurt am Main",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                },
                {
                    "id": 4,
                    "title": "Steel",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                }
            ]
        };
    };

    // ACTION-SHEET - With Text Header data
    getDataForLayout3 = (): any => {
        return {
            "headerTitle": "With Text Header",
            "shareIcon": "more",
            // Action Sheet button
            "actionSheet": {
                "title": "Choose what to do with this card?",
                "buttons": [
                    {
                        "text": "Mark as read",
                        "role": "destructive"
                    },
                    {
                        "text": "Follow author"
                    },
                    {
                        "text": "Read more info"
                    },
                    {
                        "text": "More from category"
                    },
                    {
                        "text": "Cancel",
                        "role": "cancel"
                    }
                ]
            },
            "items": [
                {
                    "id": 1,
                    "category": "best events",
                    "image": "assets/images/background/26.jpg",
                    "title": "New York City Subway",
                    "subtitle": "West Avenue, NYC",
                    "button": "$35.99"
                },
                {
                    "id": 2,
                    "category": "best events",
                    "image": "assets/images/background/28.jpg",
                    "title": "London Bridge",
                    "subtitle": "Hyde Park, London",
                    "button": "$12.99"
                },
                {
                    "id": 3,
                    "category": "main event",
                    "image": "assets/images/background/29.jpg",
                    "title": "Most Popular Bridges",
                    "subtitle": "Guilin, Kweilin",
                    "button": "$13.45"
                },
                {
                    "id": 4,
                    "category": "Best Tourt",
                    "image": "assets/images/background/12.jpg",
                    "title": "Hong Kong’s MTR",
                    "subtitle": "Kowloon Bay, Kowloon",
                    "button": "$38.60"
                },
                {
                    "id": 5,
                    "category": "best offer",
                    "image": "assets/images/background/17.jpg",
                    "title": "Venice Travel",
                    "subtitle": "Bridge, Venice",
                    "button": "$40.85"
                },
                {
                    "id": 6,
                    "category": "best offer",
                    "image": "assets/images/background/9.jpg",
                    "title": "Open Air Concert",
                    "subtitle": "Hyde Park, London ",
                    "button": "$56.55"
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            'onItemClick': function (item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
            'onItemClickActionSheet': function (item: any) {
                  that.toastCtrl.presentToast(item.button.text);
            },
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
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('actionSheet/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
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
