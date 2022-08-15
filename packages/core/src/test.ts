import { Sprite, Texture } from 'pixi.js';
import { degToRad } from './geom';

export class Test extends Sprite {
  constructor() {
    super();
    this.texture = Texture.WHITE;
    this.width = 50;
    this.height = 50;
    this.tint = 0x0000ff;

    setInterval(() => {
      this.rotation += degToRad(1);
    }, 16);
  }
}