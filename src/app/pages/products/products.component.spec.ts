import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductsComponent],
      providers: [ProductService]
    });

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);

    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100, description: 'Description 1', image: 'image1.jpg' },
      { id: 2, name: 'Product 2', price: 200, description: 'Description 2', image: 'image2.jpg' }
    ];

    spyOn(productService, 'getProducts').and.returnValue(of(mockProducts));
  });

  it('should display products', () => {
    fixture.detectChanges();
    expect(component.products.length).toBe(2);
    expect(component.products[0].name).toBe('Product 1');
  });
});
