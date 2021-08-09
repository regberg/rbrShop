import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor() { }

  /**
   * Rechnet den Betrag "value" in EUR um.
   *
   * @param value Betrag, der in EUR umgerechnet werden soll
   *
   * @param currency Währung, die in EUR umgerechnet werden soll
   *
   * @returns Liefert den Betrag "value" in EUR.
   */
  public convertToEuro(value: number | string, currency: string): number {
    const valueNumber = typeof value === 'number' ? value : parseFloat(value);

    if (
      value === undefined ||
      value === null ||
      !currency ||
      isNaN(valueNumber)
    ) {
      return 0;
    }

    let factor = 1;

    // Stand: 30.07.2021
    switch (currency) {
      case 'RUB': {
        factor = 0.012;
        break;
      }
      case 'CAD': {
        factor = 0.68;
        break;
      }
      case 'IDR': {
        factor = 0.000058;
        break;
      }
    }

    return valueNumber * factor;
  }
}
