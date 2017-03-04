import { Ang2formsPage } from './app.po';

describe('ang2forms App', () => {
  let page: Ang2formsPage;

  beforeEach(() => {
    page = new Ang2formsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
