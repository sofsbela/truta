import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  team: { image: string; quote: string; name: string }[] = [];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '840px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit() {
    this.team = [
      {
        image: '../assets/team/chef1.jpg',
        quote:
          '"As minhas paixões são a cozinha e a minha mulher. Por essa ordem."',
        name: 'João Peixoto',
      },
      {
        image: '../assets/team/chef2.jpg',
        quote: '"Nunca se sabe o dia de amanhã. Coma a sobremesa."',
        name: 'Sara Luís',
      },
      {
        image: '../assets/team/chef3.jpg',
        quote: '"Para mim, não existe um bom chefe sem uma boa equipa."',
        name: 'Leandro Oliveira',
      },
      {
        image: '../assets/team/chef4.jpg',
        quote:
          '"Só janto fora em duas ocasiões. Quando é um dia especial e quando não é."',
        name: 'Carolina Mendes',
      },
      {
        image: '../assets/team/chef5.jpg',
        quote:
          '"Comer é uma necessidade até comer no Truta. Aqui comer é arte."',
        name: 'Fábio Gonçalo',
      },
      {
        image: '../assets/team/chef6.jpg',
        quote: '"O riso tem mais força quando acompanhado por boa comida."',
        name: 'Vasco Trindade',
      },
    ];
  }
}
