import { Component } from '@angular/core';
import { ProductList } from './productList.component';
import { Product } from './product';

@Component({
    selector: 'inventory-app',
    directives: [ProductList],
    template: `<div class = "inventory-app">
                    <products-list [productList]="products" (onProductSelected)="productWasSelected($event)">
                    </products-list>
                </div>
                `
})
export class InventoryApp {
    products: Product[];
    constructor() {
        this.products = [
            new Product(
                'MYSHOES', 'Black  Running  Shoes',
                '/resources/images/products/black-shoes.jpg',
                ['Men', 'Shoes', 'Running  Shoes'],
                09.99),
            new Product(
                'NICEHAT', 'A  Nice  Black  Hat',
                '/resources/images/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99),
            new Product(
                'NEATOJACKET', 'Blue  Jacket',
                '/resources/images/products/blue-jacket.jpg',
                ['Women', 'Apparel', 'Jackets  &  Vests'],
                238.9)
        ];
    }

    productWasSelected(product: Product): void {
        console.log('Product  clicked:  ', product);
    }
}