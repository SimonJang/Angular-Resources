import { Component } from '@angular/core';
import { IPriceQuote } from './shared/pricequote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing inter component communication';
  testing = 'Inputting string in child component';
  stockSymbol: string;
  price: number;

  priceQuoteHandler(quote: IPriceQuote) {
        this.stockSymbol = quote.stockSymbol;
        this.price = quote.lastPrice;
    }
}
