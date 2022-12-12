import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  scrollPosition$!: Observable<number>;

  items: MenuItem[] = [];

  passionimages: { image: string }[] = [];

  styleimages: { image: string }[] = [];

  displayResponsive: boolean = false;

  value: Date | undefined;
  valuePerson: number = 1;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  screenHeight: number;

  constructor(private scrollService: ScrollService) {
    this.screenHeight = window.innerHeight;
  }

  ngOnInit() {
    this.scrollPosition$ = this.scrollService.windowScroll$;

    this.items = [
      {
        label: 'Sobre nós',
        items: [
          { label: 'A nossa história', routerLink: ['/history'] },
          { label: 'A nossa equipa', routerLink: ['/team'] },
        ],
      },
      {
        label: 'Menu',
        items: [
          { label: 'Pratos Principais', routerLink: ['/menu/main'] },
          { label: 'Sobremesas' },
          { label: 'Carta de Vinhos', routerLink: ['/menu/wine'] },
        ],
      },
      {
        label: 'Novidades',
        items: [{ label: 'Campanhas' }, { label: 'Eventos' }],
      },
      {
        label: 'Contacte-nos',
        url: '#contacts',
        target: '_self',
      },
    ];

    this.passionimages = [
      { image: '../assets/passionimages/img1.jpg' },
      { image: '../assets/passionimages/img2.jpg' },
      { image: '../assets/passionimages/img3.jpg' },
      { image: '../assets/passionimages/img4.jpg' },
    ];

    this.styleimages = [
      { image: '../assets/styleimages/img1.jpg' },
      { image: '../assets/styleimages/img2.jpg' },
      { image: '../assets/styleimages/img3.jpg' },
      { image: '../assets/styleimages/img4.jpg' },
    ];
  }

  showResponsiveDialog() {
    this.displayResponsive = true;
  }
}
