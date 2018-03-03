import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as PIXI from 'pixi.js';


@Injectable()
export class GreenLightService {
  constructor() {
  }
  public sourcePipeSource = new BehaviorSubject(0);

  public sourcePipe$ = this.sourcePipeSource.asObservable();

  public resourcesArray(total, pathPart) {
    let frames = 0;
    const textures = [];
    do {
      frames += 1;
      textures.push(PIXI.Texture.fromImage(`${pathPart}${frames}.jpg`),
      );
    } while (frames < total);

    return textures;
  }

}
