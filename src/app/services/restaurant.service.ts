import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Restaurant, Cuisine, Review } from '../viewModels';

@Injectable()
export class RestaurantService {

  constructor() { }

  getRestaurant(): Promise<Restaurant> {
    let rest = new Restaurant();
    rest.name = 'test name';
    rest.cuisineName = 'teset cusine';
    rest.averageRating = 4.556;
    rest.reviewCount = 30;
    return Promise.resolve(rest);

  }

getCuisines():Promise<Cuisine[]>{
  return Promise.resolve(CUISINES);
}
}

const CUISINES : Cuisine[] =[
  {id:1, name: 'indian'},
  {id:2, name: 'italian'},
];
