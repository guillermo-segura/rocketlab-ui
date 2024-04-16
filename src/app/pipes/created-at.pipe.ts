import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdAt',
  standalone: true,
})
export class CreatedAtPipe implements PipeTransform {
  transform(value?: string): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    const { dateDiff, unit } = this.getDateUnits(Math.floor((Date.now() - date.getTime())));

    return `Created ${dateDiff} ${unit} ago`;
  }

  getDateUnits(dateDiff: number){
    const divisors: { [key: string]: number } = {
      seconds: 1000,
      minutes: 60,
      hours: 60,
      days: 24,
    };
    
    let result = {
      dateDiff,
      unit: 'seconds',
    };

    for (let unit of Object.keys(divisors)) {
      const newResult = Math.floor(result.dateDiff / divisors[unit]);
      if (newResult < 1) {
        return result;
      }
      result = { dateDiff: newResult, unit };
    }

    return result;
  }
}
