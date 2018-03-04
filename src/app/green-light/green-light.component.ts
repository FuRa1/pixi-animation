import { Component, OnInit, OnDestroy, NgModule, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder } from '@angular/forms';
import * as PIXI from 'pixi.js';
import { GreenLightService } from './green-light.service';
import { Observable } from 'rxjs/Observable';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-green-light',
  templateUrl: './green-light.component.html',
  styleUrls: ['./green-light.component.scss'],
  providers: [GreenLightService],
})

export class GreenLightComponent implements OnInit, OnDestroy {

  private lightApp = new PIXI.Application(144, 365); // ini PIXI app
  private textures: PIXI.Texture[];
  private waterfall: PIXI.Sprite;
  private ticker: PIXI.ticker.Ticker;
  public animationControls: FormGroup;
  private alive = true; // is animation alive
  private frameIndex = 0; // start index;
  private totalFrames = 72; // total amount of frame && end index;
  // controls
  private isForward = true;


  constructor(private renderer: Renderer2,
              private el: ElementRef,
              private greenLightService: GreenLightService,
              private fb: FormBuilder) {
    this.renderer.appendChild(this.el.nativeElement, this.lightApp.view);  // append canvas (PIXI app) in component template
    this.textures = this.greenLightService.resourcesArray(this.totalFrames, 'assets/partials/image_part_');  // create array of resources
  }

  ngOnInit() {
    this.waterfall = new PIXI.Sprite(this.textures[this.frameIndex]); // init PIXI.Sprite el
    this.lightApp.stage.addChild(this.waterfall); // append PIXI.Sprite into PIXI.Application
    this.initControls(); // ini reactive controls
    this.ticker = new PIXI.ticker.Ticker(); // create new Ticker
    this.ticker.add((frameTime) => {
        this.calcNextIndex();
        this.waterfall.texture = this.textures[this.frameIndex];
      }
    );
    this.ticker.start();
  }

  private calcNextIndex() {
    if (!this.isForward) {
      this.frameIndex + 1 < this.totalFrames ? this.frameIndex += 1 : this.frameIndex = 0;
    } else {
      this.frameIndex - 1 < 0 ? this.frameIndex = this.totalFrames - 1 : this.frameIndex -= 1;
    }
  }

  private initControls() {
    this.animationControls = this.fb.group(
      {
        isOnPause: false,
        isForward: true,
      }
    );

    const pauseHandler = this.animationControls.get('isOnPause');
    const directionHandler = this.animationControls.get('isForward');
    const frameSpeed = this.animationControls.get('frameSpeed');

    pauseHandler.valueChanges
      .subscribe((val) => {
        val ? this.ticker.stop() : this.ticker.start();
      });

    directionHandler.valueChanges
      .subscribe((val) => {
        this.isForward = val;
      });
  }

  restart() {
    this.frameIndex = 0; // reset frame index;
    this.ticker.start();
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
