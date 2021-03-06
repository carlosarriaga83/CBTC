import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'full-screen-gallery',
    templateUrl: 'full-screen-gallery.html'
})
export class FullScreenGallery implements AfterViewInit {
  
    @Input() data: any;
    @Input() events: any;
    @ViewChild('slider') slider: Slides;
    public isLocked: boolean = false;
    sliderOptions: any;
    pagar:any;
    constructor(public navCtrl: NavController, navParams: NavParams) {
      this.sliderOptions = {
        pager: true
      };
    }

    onEvent = (event: string, item, e): void => {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    onDoubleClick = (e, slides: Slides):void => {
      this.isLocked = !this.isLocked;
      slides.lockSwipes(this.isLocked);
    }

    ngAfterViewInit(): void {
        this.sliderOptions = {
          pager:true,
          loop: true,
          zoom:true,
          initialSlide:this.data.index
        };
    }
}
