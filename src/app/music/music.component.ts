import { Component,OnInit } from '@angular/core';

import { MusicService } from './music.service';
import { Imusic } from './music.model';

@Component({
  selector: 'music-comp',
  templateUrl:'./music.component.html',
  styleUrls:['./music.component.css']
  
})


export class MusicComponent implements OnInit{
        artists: Imusic[];
        imageWidth: number= 350;
        imgwidth: number= 150;
        constructor(private _musicService: MusicService){
    
        }
        ngOnInit(): void {
            this._musicService.getMusic()
                .subscribe((data) =>this.artists = data);
        }
    }







