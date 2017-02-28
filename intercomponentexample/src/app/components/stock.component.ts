import { Component, Output, EventEmitter } from '@angular/core';
import { IPriceQuote } from '../shared/pricequote';

@Component({
  selector: 'stock-comp',
  templateUrl: './stock.component.html',
})
export class StockComponent {
    @Output() lastPrice: EventEmitter<IPriceQuote> = new EventEmitter();
    stockSymbol = 'IBM';
    price: number;

    constructor() {
        setInterval(() => {
            let priceQuote: IPriceQuote = {
                stockSymbol: this.stockSymbol,
                lastPrice: (100 * Math.random())
            };
            this.price = priceQuote.lastPrice;
            this.lastPrice.emit(priceQuote);
        }, 1000);
    }
}
