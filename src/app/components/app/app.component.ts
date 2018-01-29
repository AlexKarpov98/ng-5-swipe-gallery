import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { PhotoSwipeComponent } from 'app/components/photo-swipe/photo-swipe.component';

// Image Interface
import { IImage              } from 'app/interfaces/image';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit
{
    @ViewChild('photoSwipe') photoSwipe: PhotoSwipeComponent;

    images : IImage[] = [
        {
            src: 'http://via.placeholder.com/600x400',
            w: 600,
            h: 400
        },
        {
            src: 'http://via.placeholder.com/800x600',
            w: 1200,
            h: 900
        },
        {
            src: 'http://via.placeholder.com/960x960',
            w: 960,
            h: 960
        },
        {
            src: 'http://via.placeholder.com/1080x960',
            w: 1080,
            h: 960
        },
        {
            src: 'http://via.placeholder.com/1200x900',
            w: 1200,
            h: 900
        },
    ];

    ngOnInit() {

    }

    openImage(index: number) {
        console.log(index);
        this.photoSwipe.openGallery(this.images, index);
    }

    // ========================================================================
    openSlideshow(index?: number) {
        this.photoSwipe.openGallery(this.images);
    }
    // ========================================================================
}
