import { RoutingExPage } from './app.po';

describe('routing-ex App', () => {
  let page: RoutingExPage;

  beforeEach(() => {
    page = new RoutingExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
