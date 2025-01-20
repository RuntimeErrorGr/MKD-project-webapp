import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {ReferenceObject} from "../../model/ReferenceObject";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent implements OnInit{
  constructor(
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  products: Product[] = [];
  productId: number = -1;
  quantity: any[] = [];
  selectedQuantity: number = 1;
  descriptionDialogVisible: boolean = false;
  pageReferences: ReferenceObject[] = []

  ngOnInit(): void {
    this.selectedQuantity = 1;
    let id;
    this.activatedRoute.paramMap.subscribe(params => {id = params.get('id');});
    this.productId = id ? id : -1;

    this.pageReferences.push(
      new ReferenceObject(0, "Comandă", "/checkout")
    )

    this.products.push(
      new Product(
        0,
        'Voice Device Recognition',
        954.49,
        "Experimentează confortul de ultimă generație cu dispozitivul nostru avansat de recunoaștere" +
        " vocală. Proiectat pentru a-ți simplifica viața, acest dispozitiv îți permite să controlezi dispozitivele," +
        " să accesezi informații și să execuți comenzi—totul cu puterea vocii tale. Indiferent dacă controlezi" +
        " electrocasnice inteligente, dictezi note sau cauți informații online, acest dispozitiv de recunoaștere" +
        " hands-free vocală este asistentul tău suprem pentru un stil de viață mai inteligent.",
        [
          {
            header: "Comenzi speciale",
            description: "VDR oferă o gamă largă de funcții, inclusiv control vocal pentru" +
              " gestionarea ușoară a diferitelor dispozitive, un asistent virtual care te ajută să îți organizezi" +
              " ziua și să accesezi informații rapid, control pentru sistemele Smart Home, permițându-ți să reglezi" +
              " iluminatul, temperatura sau să gestionezi electrocasnicele inteligente, comenzi de siguranță pentru" +
              " a monitoriza și controla securitatea locuinței tale prin comenzi vocale, funcții personalizate care" +
              " se adaptează nevoilor tale specifice, precum și un asistent în productivitate care te ajută să îți" +
              " gestionezi task-urile zilnice și să îți optimizezi timpul, totul într-o experiență hands-free" +
              " complet integrată."
          },
          {
            header: "Protecția la erori",
            description: "VDR include și o serie de caracteristici esențiale pentru o experiență optimizată, cum ar" +
              " fi detectarea și corectarea erorilor, care garantează o funcționare continuă și precisă, confirmarea" +
              " și validarea fiecărei comenzi pentru a asigura rezultate exacte, gestionarea comenzilor necunoscute" +
              " printr-un sistem avansat de procesare a solicitărilor neprevăzute, prevenirea declanșărilor" +
              " accidentale pentru a elimina riscurile de acțiuni nedorite, logare și diagnostic în timp real pentru" +
              " o monitorizare constantă a performanței, măsuri de siguranță pentru erori critice care protejează" +
              " atât dispozitivul cât și utilizatorul în caz de defecțiuni majore, și feedback pentru învățare, care" +
              " permite adaptarea și îmbunătățirea continuă a performanțelor dispozitivului."
          },
          {
            header: "Ușurința în utilizare",
            description:
              "VDR oferă comenzi simple și intuitive, care fac interacțiunea ușoară chiar și pentru utilizatorii" +
              " fără experiență tehnologică, în timp ce scenariile predefinite permit activarea rapidă a setărilor" +
              " dorite, economisind timp și efort; de asemenea, feedback-ul și confirmările în timp real asigură" +
              " utilizatorii că comenzile lor au fost procesate corect, iar personalizarea rapidă a funcțiilor" +
              " permite ajustarea imediată a dispozitivului în funcție de preferințele individuale. În plus," +
              " comenzile contextuale permit adaptarea automată a dispozitivului la mediul înconjurător sau" +
              " situațiile specifice, iar funcțiile de recunoaștere inteligentă învață din interacțiuni pentru a" +
              " îmbunătăți performanțele și a oferi o experiență din ce în ce mai personalizată."
          }],
        ['/assets/products/VDR.jpg', '/assets/products/VDR-2.PNG', '/assets/products/VDR-4.webp']
      )
    );

    this.products.push(
      new Product(
        1,
        'Digital Voice Communicator',
        569.49,
        "Îmbunătățește-ți experiența de comunicare cu Digital Voice Communicator, un dispozitiv puternic" +
        " proiectat pentru interacțiuni fluide în orice mediu. Conceput pentru a se integra cu sisteme de recunoaștere" +
        " vocală și nu numai, este partenerul perfect pentru comunicare hands-free și controlul dispozitivelor" +
        " inteligente. Folosind acest dispozitiv fie individual, fie împreună cu un sistem de recunoaștere vocală," +
        " Digital Voice Communicator este ideal pentru: Controlul casei inteligente, Colaborarea la distanță în echipă," +
        "Tehnologie medicală și de asistență, precum și Confort personal și productivitate",
        [
          {
            header: "Numărul de task-uri",
            description: "DVC permite gestionarea mai multor comenzi și sarcini în același timp, fără a" +
              " afecta performanța. Astfel, poți efectua diverse acțiuni, cum ar fi controlul dispozitivelor" +
              " inteligente, răspunsul la mesaje și gestionarea apelurilor, simultan, pentru o experiență mai" +
              " eficientă și fără întreruperi îmbunătățind viteza și eficiența" +
              " dispozitivului și permițându-ți să îndeplinești mai multe task-uri, mult mai repede.",
          },
          {
            header: "Similaritatea comenzilor",
            description:
              "DVC asigură conectivitate între dispozitive, permițându-ți să le sincronizezi" +
              " rapid pentru o experiență unificată. Comenzile complementare și consistente îți permit să controlezi" +
              " mai multe funcții simultan, fără confuzie, iar adaptabilitatea la limbajul natural face interacțiunea" +
              " mai ușoară și mai intuitivă. Recunoașterea variațiilor de formulare îți permite să folosești" +
              " expresii diferite, iar dispozitivul va înțelege și va răspunde corect. Sincronizarea comenzilor" +
              " între platforme garantează o experiență fluidă, indiferent de dispozitivul pe care îl folosești," +
              " iar flexibilitatea în interpretarea comenzilor asigură o adaptare rapidă la stilul tău de comunicare."
          },
          {
            header: "Ușurința în utilizare",
            description:
              "DVC oferă o experiență de utilizare fără precedent," +
              " combinând tehnologia avansată cu un set complet de funcționalități pentru a satisface nevoile" +
              " utilizatorilor din orice context. Cu integrare rapidă cu alte dispozitive, poți conecta fără efort" +
              " telefonul, computerul sau sistemele de acasă pentru o operare unificată și eficientă, economisind" +
              " timp și resurse. Asistența pentru multitasking îți permite să îndeplinești simultan mai multe" +
              " activități, fie că răspunzi la mesaje, controlezi aparate inteligente sau efectuezi căutări, fără a" +
              " fi nevoie să întrerupi alte sarcini.\n" +
              "Dispozitivul dispune de moduri adaptative de comunicare, ajustându-se automat la condițiile mediului" +
              " tău pentru o claritate superioară a sunetului, fie că te afli într-un spațiu aglomerat sau unul" +
              " liniștit. Mai mult, transcrierea și traducerea în timp real facilitează comunicarea fără bariere" +
              " lingvistice, transcriind și traducând instantaneu conversațiile pentru a te conecta ușor cu persoane" +
              " din întreaga lume. Controlul intuitiv pentru confidențialitate îți oferă posibilitatea de a gestiona" +
              " cu ușurință setările de confidențialitate și securitate, protejându-ți datele personale prin opțiuni" +
              " simple de activare și dezactivare. Prin personalizarea rapidă și profiluri vocale, dispozitivul se" +
              " adaptează stilului tău unic, învățând din interacțiunile anterioare pentru a îmbunătăți performanțele" +
              " și a-ți oferi o experiență personalizată. Feedback-ul vocal și vizual îți furnizează informații clare" +
              " și precise despre fiecare comandă, în timp ce compatibilitatea extinsă garantează integrarea perfectă" +
              " cu o gamă largă de platforme și dispozitive. În plus, funcțiile de accesibilitate sunt concepute" +
              " pentru a oferi o utilizare facilă și adaptabilă tuturor utilizatorilor, indiferent de nevoile" +
              " speciale sau limitările acestora."
          }],
        ['/assets/products/DVC.jpg', '/assets/products/DVC-2.jpg', '/assets/products/DVC-3.jpg']
      )
    );

    this.quantity = [
      {name: 1,value: 1},
      {name: 2,value: 2},
      {name: 3,value: 3},
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
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: this.selectedQuantity + ' produse '  + this.products[this.productId].name + ' adăugate la comanda ta!'});
  }

  changeDescriptionDialogVisibility = () =>  {
    this.descriptionDialogVisible = !this.descriptionDialogVisible
  }
}
