import { Component, OnInit, NgModule, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as PIXI from 'pixi.js';
import { GreenLightService } from './green-light.service';

@Component({
  selector: 'app-green-light',
  templateUrl: './green-light.component.html',
  styleUrls: ['./green-light.component.scss'],
  providers: [GreenLightService],
})

export class GreenLightComponent implements OnInit {

  private lightApp = new PIXI.Application(144, 365);
  private loader;
  private textures = [];
  public waterfall;
  private isForward = true;
  private frameTime = 20;
  private frameIndex = 0;
  private totalFrames = 72;
  private isOnPause = false;


  constructor(private renderer: Renderer2,
              private el: ElementRef,
              private greenLightService: GreenLightService) {
    this.renderer.appendChild(this.el.nativeElement, this.lightApp.view);
    this.textures = this.greenLightService.resourcesArray(72, 'assets/partials/image_part_');
  }

  changerTicker() {
    setTimeout(() => {
      if (this.frameIndex === this.totalFrames - 1) {
        this.frameIndex = 0;
      } else {
        this.frameIndex += 1;
      }
      this.greenLightService.sourcePipeSource.next(this.frameIndex);
      if (!this.isOnPause) {
        this.changerTicker();
      }
    }, this.frameTime);
  }

  ngOnInit() {
    this.waterfall = new PIXI.Sprite(this.textures[this.frameIndex]);
    this.lightApp.stage.addChild(this.waterfall);
    // this.changerTicker();
    this.greenLightService.sourcePipe$
      .subscribe((index) => {
        this.waterfall.texture = this.textures[index];
      });
  }

  pause() {
    this.isOnPause = !this.isOnPause;
    if (!this.isOnPause) {
      this.changerTicker();
    }
  }

  restart() {
    this.isOnPause = false;
    this.frameIndex = 0;
  }

}
