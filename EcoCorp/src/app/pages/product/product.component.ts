import {AfterViewInit, Component} from '@angular/core';
import {Product} from "../../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit{
  products: Product[] = [];

  ngAfterViewInit() {
    this.products.push(
      new Product(
        0,
        'VDR - Voice Device Recognition',
        499.99,
        {},
        ['/products/VDR', '/products/VDR-2', '/products/VDR-3', '/products/VDR-4']
      )
    );

    this.products.push(
      new Product(
        1,
        'DVC - Digital Voice Communicator',
        499.99,
        {},
        ['/products/DVC', '/products/DVC-2', '/products/DVC-3']
      )
    );
  }
}
