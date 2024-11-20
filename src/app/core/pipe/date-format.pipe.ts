import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  public transform(
    date: string | Date | null,
    format = 'DD MMMM',
    mode: 'utc' | 'local' = 'utc',
  ): string {
    const isDefaultUTCDate = dayjs.utc(date).format('DD.MM.YY') === '01.01.01';

    if (!date || isDefaultUTCDate) {
      return '';
    }

    const parsedDate = mode === 'utc' ? dayjs.utc(date) : dayjs(date);
    return parsedDate.format(format);
  }
}
