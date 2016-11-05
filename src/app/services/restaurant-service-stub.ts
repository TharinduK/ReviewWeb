import { iRestaurant } from '.';
import { Restaurant } from '../viewModels';


export class RestaurantServiceStub implements iRestaurant {
    getRestaurant(): Restaurant {
        var rest = new Restaurant();
        rest.name = "test name";
        rest.cuisineName = "teset cusine";
        return rest;
    }
}
