import { AsyncexamplePage } from './app.po';

describe('asyncexample App', () => {
  let page: AsyncexamplePage;

  beforeEach(() => {
    page = new AsyncexamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
