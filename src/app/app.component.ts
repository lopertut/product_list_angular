import { Component} from '@angular/core';

@Component({
	selector: 'app-root',
	imports: [],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	products = Object.keys(localStorage);
	localstorage = localStorage;
	updated = false;

	addProduct() {
		const productName = (<HTMLInputElement>document.getElementById("name")).value;
		const productPrice = (<HTMLInputElement>document.getElementById("price")).value;
		localStorage.setItem(productName, productPrice);
		this.products = Object.keys(localStorage);
	}

	removeProduct(product: string) {
		this.localstorage.removeItem(product);
		this.products = Object.keys(localStorage);
	}
}
