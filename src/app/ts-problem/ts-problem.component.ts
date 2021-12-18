import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ts-problem',
  templateUrl: './ts-problem.component.html',
  styleUrls: ['./ts-problem.component.scss']
})

export class TsProblemComponent implements OnInit {
  destinations = [];
  destinationsView = [];
  destinationPixelOffset = 4;
  combinations = 1;
  salesManOffset = 125;
  currentPosition:any = {
    x: this.salesManOffset,
    y: this.salesManOffset
  };
  visited = [];
  totalDistance = 0;
  done = false;
  hasrun = false;
  travels = [];
  constructor() { }

  ngOnInit(): void {
  }

  addDestination(event) {
    let top = event.offsetY - this.destinationPixelOffset
    let right = (251 - this.destinationPixelOffset) - event.offsetX;
    let destination = {
      top,
      right,
      x: event.offsetX,
      y: 251 - event.offsetY
    }
    if(this.destinations.length == 0) {
      this.destinationsView = [];
      this.travels = [];
      this.currentPosition = {
        x: this.salesManOffset,
        y: this.salesManOffset
      };
    }
    this.destinations.push(destination);
    this.destinationsView.push(destination);
    
    this.combinations = this.factorial(this.destinations.length);
  }

  calcDistance(x1, y1, x2, y2) {
    let x = x1 - x2;
    let y = y1 - y2;
    return Math.sqrt(x * x + y * y)
  }

  factorial(num)
  {
    let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

  kevinCalc() {
    this.done = false;
    if(this.destinations.length > 0) {
      this.findNextClosest().subscribe((closest :any) =>{
        this.travelTo(closest);
        this.kevinCalc();
      });
    } else {
      this.done = true;
      this.hasrun = false;
    }
  }

  findClosest() {
    let shortest = 0;
    let shortestIndex = 0;
    return new Observable((observer) => {
      this.destinations.forEach((destination, index) => {
        if(index == 0) {
          shortest = destination.distance;
        } else {
          if(destination.distance <= shortest) {
            shortest = destination.distance;
            shortestIndex = index;
          }
        }
      });
      observer.next({distance:shortest, index: shortestIndex});
      observer.complete();
    });
  }

  travelTo(closest:any) {
    let destination = this.destinations[closest.index];
    this.travels.push({x1:destination.x, y1:destination.y, x2:this.currentPosition.x, y2:this.currentPosition.y});
    this.currentPosition = this.destinations[closest.index];
    this.totalDistance = this.totalDistance + closest.distance;
    this.destinations.splice(closest.index,1);
  }

  findNextClosest() {
    let shortest = 0;
    let shortestIndex = 0;
    return new Observable((observer) => {
      this.destinations.forEach((destination, index) => {
        if(index == 0) {
          shortest = this.calcDistance(destination.x, destination.y, this.currentPosition.x, this.currentPosition.y);
        } else {
          let distance = this.calcDistance(destination.x, destination.y, this.currentPosition.x, this.currentPosition.y);
          if(distance <= shortest) {
            shortest = distance;
            shortestIndex = index;
          }
        }
      });
      observer.next({distance:shortest, index: shortestIndex});
      observer.complete();
    });
  }

  bruteCalc() {

  }

}
