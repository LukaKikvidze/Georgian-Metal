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
      image: 'assets/images/armatura.webp',
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
    {
      id: 3,
      title: 'პროდუქტი 3',
      image: 'assets/images/product3.jpg',
      description: 'მცირე აღწერა პროდუქტის შესახებ 3...',
      fullDescription: 'სრული აღწერა პროდუქტის შესახებ 3...',
    },
    {
      id: 4,
      title: 'პროდუქტი 4',
      image: 'assets/images/product4.jpg',
      description: 'მცირე აღწერა პროდუქტის შესახებ 4...',
      fullDescription: 'სრული აღწერა პროდუქტის შესახებ 4...',
    },
  ];

  constructor(private router: Router) {}

  viewDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
