import { Injectable } from '@angular/core';
import * as PIXI from 'pixi.js';

@Injectable()
export class GreenLightService {
  constructor() {
  }

  public resourcesArray(total, pathPart) {
    let frames = 0;
    const textures: PIXI.Texture[] = [];
    // fill array by PIXI.Texture
    do {
      frames += 1;
      textures.push(PIXI.Texture.fromImage(`${pathPart}${frames}.jpg`),
      );
    } while (frames < total);

    return textures;
  }

}
