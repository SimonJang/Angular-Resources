import { Chapter2Page } from './app.po';

describe('chapter2 App', () => {
  let page: Chapter2Page;

  beforeEach(() => {
    page = new Chapter2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
