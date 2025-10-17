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

	isUpdated() {
		if (this.updated) {
			this.products = Object.keys(localStorage);
			this.updated = false;
			return true;
		} else {
			return false;
		}
	}

	addProduct() {
		const productName = (<HTMLInputElement>document.getElementById("name")).value;
		const productPrice = (<HTMLInputElement>document.getElementById("price")).value;
		localStorage.setItem(productName, productPrice);
		this.updated = true;
	}

	removeProduct(product: string) {
		this.localstorage.removeItem(product);
		this.updated = true;
	}
}
