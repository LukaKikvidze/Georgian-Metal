import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  fullDescription: string;
}

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'პროდუქტი 1',
      image: 'assets/images/product1.jpg',
      description: 'მცირე აღწერა პროდუქტის შესახებ 1...',
      fullDescription: 'სრული აღწერა პროდუქტის შესახებ 1...',
    },
    {
      id: 2,
      title: 'პროდუქტი 2',
      image: 'assets/images/product2.jpg',
      description: 'მცირე აღწერა პროდუქტის შესახებ 2...',
      fullDescription: 'სრული აღწერა პროდუქტის შესახებ 2...',
    },
  ];

  constructor(private router: Router) {}

  viewDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
