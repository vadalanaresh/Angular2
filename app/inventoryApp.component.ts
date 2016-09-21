import { Component } from '@angular/core';
import { ProductList } from './productList.component';
import { Product } from './product';

@Component({
    selector: 'inventory-app',
    directives: [ProductList],
    template : `<div class = "inventory-app">
                    <products-list [productList]="products" (onProductSelected)="productWasSelected($event)">
                    </products-list>
                </div>
                `
})
export class InventoryApp{
    products : Product[];
    constructor()
    {
        this.products = [new Product()]
    }
}