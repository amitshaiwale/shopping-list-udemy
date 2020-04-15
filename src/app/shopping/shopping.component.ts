import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppnigListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  ingredients: Ingredients[];
  constructor(private shhoppingListService: ShoppnigListService) { }

  ngOnInit(): void {
    this.ingredients = this.shhoppingListService.getIngredient();
  }

  // getNewItem(newItem: Ingredients){
  //   this.ingredients.push(newItem);
  // }

}
