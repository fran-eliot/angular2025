import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nota'
})
export class NotaPipe implements PipeTransform {

  transform(value: number): string {
    const notas: string[] = [ 'Insuficiente', 'Suficiente', 'Bien', 'Notable', 'Sobresaliente'];
    if (value < 5)
      return notas[0];
    if (value < 6)
      return notas[1];
    if (value < 7)
      return notas[2];
    if (value < 8)
      return notas[3];
    if (value < 9)
      return notas[4];    
    return null;
  }

}
