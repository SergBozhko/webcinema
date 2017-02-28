import { WebcinemaPage } from './app.po';

describe('webcinema App', () => {
  let page: WebcinemaPage;

  beforeEach(() => {
    page = new WebcinemaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
