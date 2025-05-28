import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product = {
    id: 123,
    name: 'არმატურა',
    description: ' B500B, DIN 448.1.',
    imageUrl: 'assets/images/sample.jpg'
  };

  defaultImage = 'assets/gallery-images/armatura.png'; // დეფოლტური სურათის მისამართი

  constructor(private router: Router) {}

  ngOnInit(): void {
    // შეგიძლიათ აქ დამატებითი ინიციალიზაცია განახორციელოთ
  }

  goToDetail(): void {
    this.router.navigate(['/products', this.product.id]);
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImage;
    imgElement.classList.add('default-image');
    imgElement.alt = 'სურათი ვერ ჩაიტვირთა';

    // შეგიძლიათ დამატებითი ლოგიკაც დაამატოთ
    console.warn('პროდუქტის სურათი ვერ ჩაიტვირთა, გამოყენებულია დეფოლტური სურათი');
  }
}
