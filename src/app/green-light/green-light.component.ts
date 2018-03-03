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
  public animationControls: FormGroup;
  private alive = true; // is animation alive
  private frameIndex = 0; // start index;
  private totalFrames = 72; // total amount of frame && end index;
  // controls
  private isOnPause = false;
  private isForward = true;
  private frameChangeTime = 20; // timeout prop;


  constructor(private renderer: Renderer2,
              private el: ElementRef,
              private greenLightService: GreenLightService,
              private fb: FormBuilder,) {
    this.renderer.appendChild(this.el.nativeElement, this.lightApp.view);  // append canvas (PIXI app) in component template
    this.textures = this.greenLightService.resourcesArray(72, 'assets/partials/image_part_');  // create array of resources
  }

  changerTicker() {
    setTimeout(() => {
      this.calcNextIndex();
      this.waterfall.texture = this.textures[this.frameIndex];
      if (!this.isOnPause) { // continue animation if not paused
        this.changerTicker();
      }
    }, this.frameChangeTime);
  }

  ngOnInit() {
    this.waterfall = new PIXI.Sprite(this.textures[this.frameIndex]); // init PIXI.Sprite el
    this.lightApp.stage.addChild(this.waterfall); // append PIXI.Sprite into PIXI.Application
    this.initControls(); // ini reactive controls
    this.changerTicker(); // start new ticker
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
        frameSpeed: 20,
      }
    );

    const pauseHandler = this.animationControls.get('isOnPause');
    const directionHandler = this.animationControls.get('isForward');
    const frameSpeed = this.animationControls.get('frameSpeed');

    pauseHandler.valueChanges
      .subscribe((val) => {
        console.log(val);
        if (!val) {
          setTimeout(() => { // setTimeout added to be sure that prev animation "Tick" ended.
            this.isOnPause = val;
            this.changerTicker(); // start new ticker
          }, this.frameChangeTime);
        } else {
          this.isOnPause = val;
        }
      });

    directionHandler.valueChanges
      .subscribe((val) => {
        this.isForward = val;
      });

    frameSpeed.valueChanges
      .subscribe((val) => {
        if (typeof val === 'number') {
          this.frameChangeTime = val;
        }
      });
  }

  restart() {
    this.isOnPause = true; // stop animation, if progress
    this.frameIndex = 0; // reset frame index;
    const pauseHandler = this.animationControls.get('isOnPause');
    pauseHandler.setValue(false);
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
