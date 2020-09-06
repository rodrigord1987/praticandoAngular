import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

import { PoI18nService } from '@portinari/portinari-ui';
import { BeerService } from 'src/shared/services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

name = ' AppName page';
nome = 'Referente ao ngModel';
valPipe: number;
literals = {};
reponsebeer: any;

  constructor(private poI18nService: PoI18nService, private beerService: BeerService) {
    poI18nService.getLiterals()
    .subscribe((literals) => {
      this.literals = literals;
    });

    beerService.getRandomBeer().subscribe((reponsebeer: any) => {
      console.log(reponsebeer);
    });
   }



  /*literals = {
    labelButton: 'My Button',
    labelInput: 'Name'
  };*/

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  changeName() {
    this.name = `${this.name} - Executado changeName via event dataBinding`;
  }

  private onClick() {
    alert('Clicked in menu item');
  }

}
