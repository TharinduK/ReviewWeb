import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Restaurant } from '../viewModels';
import { iRestaurant } from '.'

@Injectable()
export class RestaurantService{

  constructor() { }

  getRestaurant(): Promise<Restaurant> {
    var rest = new Restaurant();
    rest.name = "test name";
    rest.cuisineName = "teset cusine";
    rest.averageRating = 4.556;
    rest.reviewCount  =30;
    return Promise.resolve(rest);

  }


}
