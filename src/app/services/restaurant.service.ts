import { Injectable } from '@angular/core';

import { Restaurant } from '../viewModels';
import { iRestaurant } from '.'

@Injectable()
export class RestaurantService implements iRestaurant {

  constructor() { }

  getRestaurant(): Restaurant {
    var rest = new Restaurant();
    rest.name = "test name";
    rest.cuisineName = "teset cusine";
    return rest;

  }


}
