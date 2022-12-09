import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private scrollService: ScrollService) {
    this.scrollService.windowScroll$.subscribe((scrollPosition) => {
      let elementHeroText = document.getElementById('hero-text');
      let elementNavbar = document.getElementById('navbar');

      elementHeroText!.style.display = scrollPosition < 1200 ? 'block' : 'none';
      elementNavbar!.style.backgroundColor =
        scrollPosition > 500 ? 'rgba(0, 0, 0, 0.767)' : 'rgba(0, 0, 0, 0.05)';
      elementNavbar!.style.top = scrollPosition > 500 ? '0' : '5%';
    });
  }

  items: MenuItem[] = [];

  passionimages: { image: string }[] = [];

  styleimages: { image: string }[] = [];

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

  ngOnInit() {
    this.items = [
      {
        label: 'Sobre nós',
        items: [{ label: 'A nossa história' }, { label: 'A nossa equipa' }],
      },
      {
        label: 'Menu',
      },
      {
        label: 'Novidades',
        items: [{ label: 'Campanhas' }, { label: 'Eventos' }],
      },
      {
        label: 'Contacte-nos',
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
}
