import { Pipe, PipeTransform } from '@angular/core';
import { CalculationService } from '../services/calculation.service';

@Pipe({
  name: 'calculateToEur',
})
export class CalculateToEurPipe implements PipeTransform {
  constructor(private calcService: CalculationService) {}

  transform(value: number, currency: string): unknown {
    return this.calcService.convertToEuro(value, currency);
  }
}
