import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch products', () => {
    const mockProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 100, description: 'Description 1', image: 'image1.jpg' },
      { id: 2, name: 'Product 2', price: 200, description: 'Description 2', image: 'image2.jpg' }
    ];

    service.getProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('http://localhost/backend/get-products.php');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
