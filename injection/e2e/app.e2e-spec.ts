import { InjectiontestPage } from './app.po';

describe('injectiontest App', () => {
  let page: InjectiontestPage;

  beforeEach(() => {
    page = new InjectiontestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
