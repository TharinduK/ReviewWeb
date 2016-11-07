import { Component, OnInit } from '@angular/core';

import { Cuisine  } from '../viewModels';
import { RestaurantService } from '../services';
@Component({
  selector: 'app-cuisine-group',
  templateUrl: './cuisine-group.component.html',
  styleUrls: ['./cuisine-group.component.css']
})
export class CuisineGroupComponent implements OnInit {
public cuisines:Cuisine[];
public selectedCuisine:Cuisine;

  constructor(
    private restSvc: RestaurantService
  ) { }

  ngOnInit() {
    this.restSvc.getCuisines().then(cuisines => this.cuisines = cuisines);
  }

}
