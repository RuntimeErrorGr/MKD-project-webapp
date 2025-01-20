import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  products: Product[] = [];
  productId: number = -1;
  quantity: any[] = [];
  selectedQuantity: number = 1;
  _activeIndex: number = 2;

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.products[this.productId].images && 0 <= newValue
      && newValue <= this.products[this.productId].images.length - 1) {
      this._activeIndex = newValue;
    }
  }

  ngOnInit(): void {
    let id;
    this.activatedRoute.paramMap.subscribe(params => {
      id = params.get('id');
    });
    this.productId = id ? id : -1;

    this.products.push(
      new Product(
        0,
        'VDR - Voice Device Recognition',
        499.99,
        [
          {
            header: "Comenzi speciale",
            description: "1) Funcții de control\n" +
            "2) Asistent virtual\n" +
            "3) Control Smart Home\n" +
            "4) Comenzi de siguranță\n" +
            "5) Funcții personalizate\n" +
            "6) Asistent în productivitate\n"
          },
          {
            header: "Protecția la erori",
            description: "1) Detectarea și corectarea erorilor\n" +
              "2) Confirmare și validare\n" +
              "3) Gestionarea comenzilor necunoscute\n" +
              "4) Prevenirea declanșărilor accidentale\n" +
              "5) Logare și diagnostic\n" +
              "6) Măsuri de siguranță pentru erori critice\n" +
              "7) Feedback pentru învățare"
          },
          {
            header: "Ușurința în utilizare",
            description:
              "1) Comenzi simple și intuitive\n" +
              "2) Scenarii predefinite\n" +
              "3) Feedback și confirmări\n" +
              "4) Personalizare rapidă\n" +
              "5) Comenzi contextuale\n" +
              "6) Funcții de recunoaștere inteligentă"
          }],
        ['/assets/products/VDR.jpg', '/assets/products/VDR-2.PNG', '/assets/products/VDR-4.webp']
      )
    );

    this.products.push(
      new Product(
        1,
        'DVC - Digital Voice Communicator',
        499.99,
        [
          {
            header: "Numărul de task-uri",
            description: "",
          },
          {
            header: "Similaritatea comenzilor",
            description:
              "1) Conectivitate între dispozitive\n" +
              "2) Comenzi complementare si consistente\n" +
              "3) Adaptabilitate la limbaj natural\n" +
              "4) Recunoașterea variațiilor de formulare\n" +
              "5) Sincronizarea comenzilor între platforme\n" +
              "6) Flexibilitate în interpretarea comenzilor"
          },
          {
            header: "Ușurința în utilizare",
            description:
              "1) Integrare rapidă cu alte dispozitive\n" +
              "2) Asistență pentru multitasking\n" +
              "3) Moduri adaptative de comunicare\n" +
              "4) Transcriere și traducere în timp real\n" +
              "5) Control intuitiv pentru confidențialitate\n" +
              "6) Personalizare și profiluri vocale\n" +
              "7) Feedback vocal și vizual\n" +
              "8) Compatibilitate extinsă\n" +
              "9) Funcții de accesibilitate"
          }],
        ['/assets/products/DVC.jpg', '/assets/products/DVC-2.jpg', '/assets/products/DVC-3.jpg']
      )
    );

    this.quantity = [
      {name: 1},
      {name: 2},
      {name: 3},
    ]
  }

  setImagesForGalleria(): any[] {
    return this.products[this.productId].images.map(path => ({
      itemImageSrc: path,
      thumbnailImageSrc: path,
      alt: this.products[this.productId].name,
      title: this.products[this.productId].name
    }))
  }

  submit(): void {
    this.selectedQuantity = 1;
    this.router.navigate(['/checkout'])
  }
}
