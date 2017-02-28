import { IntercomponentexamplePage } from './app.po';

describe('intercomponentexample App', () => {
  let page: IntercomponentexamplePage;

  beforeEach(() => {
    page = new IntercomponentexamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
