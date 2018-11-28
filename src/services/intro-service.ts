import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'

@Injectable()
export class IntroService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    // INTRO WIZARD
    getData = (): any => {
        return {
            "btnPrev": "Previous",
            "btnNext": "Next",
            "btnFinish": "Finish",
            "items": [
              {
                 "backgroundImage": "assets/images/background/11.jpg",
                  "logo": "assets/images/logo/1.png",
                  "title": "Aenean feugiat ipsum eget porttitor auctor",
                  "description": "Duis gravida, tellus eget condimentum vestibulum, massa metus gravida mauris, elementum sodales nunc tellus ut ligula"
              },
              {
                 "backgroundImage": "assets/images/background/15.jpg",
                  "logo": "assets/images/logo/1.png",
                  "title": "Sed sollicitudin tortor id bibendum sollicitudin",
                  "description": "Donec tincidunt odio eget ante bibendum, eget dapibus mauris hendrerit"
              },
              {
                 "backgroundImage": "assets/images/background/10.jpg",
                  "logo": "assets/images/logo/1.png",
                  "title": "In ac tortor in risus commodo molestie",
                  "description": "Ut iaculis scelerisque mauris sit amet interdum"
              }
            ]
        };
    }

    load(): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('intro')
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
                observer.next(this.getData());
                observer.complete();
            });
        }
    };
}
