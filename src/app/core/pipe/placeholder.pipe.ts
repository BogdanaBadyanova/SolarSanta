import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder',
  standalone: true,
})
export class PlaceholderPipe implements PipeTransform {
  public transform(value: unknown, placeholder = '–'): unknown {
    return value ? value : placeholder;
  }
}
