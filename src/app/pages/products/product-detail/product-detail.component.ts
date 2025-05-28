import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId!: number;
  product: any; // Placeholder for product data

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the product ID from the route parameter
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // Convert the ID to a number
      this.fetchProductDetails();
    });
  }

  fetchProductDetails(): void {
    // Here you would typically make a service call to fetch the product details from an API
    // For now, we'll simulate it with static data.

    const productData = [
      { id: 1, title: 'Product 1', description: 'This is a detailed description of Product 1.', image: 'assets/gallery-images/armatura.png' },
      { id: 2, title: 'Product 2', description: 'This is a detailed description of Product 2.', image: 'assets/product2.jpg' },
      { id: 3, title: 'Product 3', description: 'This is a detailed description of Product 3.', image: 'assets/product3.jpg' },
    ];

    // Find the product that matches the given productId
    this.product = productData.find(p => p.id === this.productId);
  }
}
