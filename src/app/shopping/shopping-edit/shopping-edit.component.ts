import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppnigListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  ingredients = {name: "", amount: ""};
  @Output() sendAddedItem = new EventEmitter();
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor(private slService: ShoppnigListService) { }

  ngOnInit(): void {
  }

  addInput(nameInput, amountInput){
    this.ingredients.name = nameInput.value;
    this.ingredients.amount = amountInput.value;
    this.sendAddedItem.emit(this.ingredients);
    console.log(nameInput.value);
    const ingrName = this.nameInputRef.nativeElement.value;
    const ingrAmount = this.amountInputRef.nativeElement.value;
    const newIngr = new Ingredients(ingrName, ingrAmount);
    // this.ingredientAdded.emit(newIngr);
    this.slService.addIngredient(newIngr);
  }

}
