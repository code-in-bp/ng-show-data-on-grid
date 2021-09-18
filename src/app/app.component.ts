import { Component } from '@angular/core';
import {Car} from "./models/Car";

@Component({
  selector: 'app-root',
  template: `
   
    <div ibmGrid>
      <h1>
        {{title}}!
      </h1>

      <div ibmRow>
        <div ibmCol>
          <h1>New Cars</h1>
          <button (click)="handleClick()"  size="lg" style= "width: 18rem;" *ngFor="let car of newCars" >

            <h2>{{car.brand}}</h2>
            <h6>{{car.category}}</h6>
            <h6>{{car.status}}</h6>
            <h6>{{car.desc}}</h6>
          </button>
          
          
        </div>
      </div>
      
      
      <div ibmRow>
        <div ibmCol>
          <h1>Used Cars</h1>
          <button *ngFor="let car of oldCars">
            <h2>{{car.brand}}</h2>
            <h6>{{car.category}}</h6>
            <h6>{{car.status}}</h6>
            <h6>{{car.desc}}</h6>

          </button>

        </div>
      </div>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Cars Store';
  newCars: Array<Car> = [
    {
      brand: 'BMW',
      category: 'salon car',
      status: 'New',
      desc: 'somesome afnssdlvnc'
    },
    {
      brand: 'Toyota',
      category: 'salon car',
      status: 'New',
      desc: 'somesome afnssdlvnc'
    },
    {
      brand: 'Mercedes',
      category: 'salon car',
      status: 'New',
      desc: 'somesome afnssdlvnc'
    },
    {
      brand: 'Logan',
      category: 'salon car',
      status: 'New',
      desc: 'somesome afnssdlvnc'
    },
    {
      brand: 'BMW',
      category: 'salon car',
      status: 'New',
      desc: 'somesome afnssdlvnc'
    },
  ];


  oldCars: Array<Car> = [
    {
      brand: 'Toyota',
      category: 'salon car',
      status: 'Used',
      desc: 'somesome afnssdlvnc'
    },
    {
      brand: 'Mercedes',
      category: 'salon car',
      status: 'Used',
      desc: 'somesome afnssdlvnc'
    },
    {
      brand: 'Logan',
      category: 'salon car',
      status: 'Used',
      desc: 'somesome afnssdlvnc'
    },
    {
      brand: 'BMW',
      category: 'salon car',
      status: 'Used',
      desc: 'somesome afnssdlvnc'
    }
  ]


  handleClick(): void {
    console.log("button clicked!")
  }
}