/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from '../viewModels';
import { RestaurantService, RestaurantServiceStub } from '../services';

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  let expectedRestName = "Test Rest Name";
  let expectedCusineName = "Test Cusine Name";
  let expectedReviewCount = 33;
  let inputAverage = 3.449765;
  let expectedAverage = 3.45;
  var spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RestaurantComponent
      ],
      providers: [RestaurantService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;

    //service injected to the component
    let restSvc = fixture.debugElement.injector.get(RestaurantService);

    //setup get restuarant method
    var rest = new Restaurant();
    rest.name = expectedRestName;
    rest.cuisineName = expectedCusineName;
    rest.averageRating = inputAverage;
    rest.reviewCount = expectedReviewCount;

    spy = spyOn(restSvc, 'getRestaurant')
      .and.returnValue(Promise.resolve(rest));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not rest name before OnInit', () => {
    let de = fixture.debugElement.nativeElement;
    let el = de.querySelector('h2');

    expect(el).toBeNull('nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getRestaurant not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.nativeElement;
    let el = de.querySelector('h2');

    expect(el).toBeNull('nothing displayed');
    expect(spy.calls.any()).toBe(true, 'getRestaurant called');
  });

  it('should show restaurant after getRestaurant promise (async)', async(() => {
    fixture.detectChanges();

    //after returing value 
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let de = fixture.debugElement.nativeElement;
      let el = de.querySelector('h2');
      //let elavg = de.querySelector(By.css("average"));
      //let elcount = de.querySelector(By.css('review'));

      expect(el.textContent).toContain(expectedRestName);
      expect(el.textContent).toContain(expectedCusineName);
     // expect(elavg.TextContent).toContain(expectedAverage);
     // expect(elcount.TextContent).toContain(expectedReviewCount);
    });
  }));

});
