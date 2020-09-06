import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: any): any {
    value = parseInt(value, 0);
    switch (value) {
      case 1:
        return 'Normal';
      case 2:
        return 'Tele Pedido';
      case 3:
        return 'Configurado';
      case 4:
        return 'Batch';
      case 5:
        return 'Exportação';
    }
  }
}
