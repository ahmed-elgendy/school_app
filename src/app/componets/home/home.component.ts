import { Component, OnInit } from '@angular/core';
import {Good} from '../../interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[] = [

    {name: 'm1', price: 5, photourl: 'assets/m1.jpg'},
    {name: 'm2', price: 4, photourl: 'assets/m2.jpg'},
    {name: 'm3', price: 6, photourl: 'assets/m4.jpg'},
    {name: 'm4', price: 8, photourl: 'assets/m4.jpg'},
    {name: 'm1', price: 5, photourl: 'assets/m1.jpg'},
    {name: 'm2', price: 4, photourl: 'assets/m2.jpg'},
    {name: 'm3', price: 6, photourl: 'assets/m4.jpg'},
    {name: 'm4', price: 8, photourl: 'assets/m4.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  addToCard(index){
    console.log('added', this.goods[index]);
  }

}
