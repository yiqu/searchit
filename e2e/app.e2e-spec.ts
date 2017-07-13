import { SearchemPage } from './app.po';

describe('searchem App', () => {
  let page: SearchemPage;

  beforeEach(() => {
    page = new SearchemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
