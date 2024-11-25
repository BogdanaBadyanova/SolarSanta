import { Injectable } from '@angular/core';
import { AbstractApiResponseAdapter } from './abstract-api-response.adapter';
import { BoxLogoEnum } from '../enums/box-logo.enum';

@Injectable({
  providedIn: 'root',
})
export class BoxLogoEnumAdapter extends AbstractApiResponseAdapter<string, BoxLogoEnum> {
  public override fromApi(apiModel: string): BoxLogoEnum {
    switch (apiModel) {
      case 'box-logo/bag.png':
        return BoxLogoEnum.Bag;
      case 'box-logo/ball.png':
        return BoxLogoEnum.Ball;
      case 'box-logo/garland.png':
        return BoxLogoEnum.Garland;
      case 'box-logo/gift.png':
        return BoxLogoEnum.Gift;
      case 'box-logo/glasses.png':
        return BoxLogoEnum.Glasses;
      case 'box-logo/happy.png':
        return BoxLogoEnum.Happy;
      case 'box-logo/head.png':
        return BoxLogoEnum.Head;
      case 'box-logo/hoho.png':
        return BoxLogoEnum.Hoho;
      case 'box-logo/horns.png':
        return BoxLogoEnum.Horns;
      case 'box-logo/mittens.png':
        return BoxLogoEnum.Mittens;
      case 'box-logo/rocket.png':
        return BoxLogoEnum.Rocket;
      case 'box-logo/sleigh.png':
        return BoxLogoEnum.Sleigh;
      case 'box-logo/snowflake.png':
        return BoxLogoEnum.Snowflake;
      case 'box-logo/snowman.png':
        return BoxLogoEnum.Snowman;
      case 'box-logo/sock.png':
        return BoxLogoEnum.Sock;
      default:
        return BoxLogoEnum.Sock;
    }
  }
}
