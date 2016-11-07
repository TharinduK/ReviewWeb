import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../viewModels';
import { RestaurantService } from '../services';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public restaurant: Restaurant;

  constructor(
    private restSvc: RestaurantService
  ) { }

  ngOnInit() {
    this.restSvc.getRestaurant().then(rest => this.restaurant = rest);

  }

}

