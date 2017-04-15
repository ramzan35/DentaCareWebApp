import { DentacarePage } from './app.po';

describe('dentacare App', () => {
  let page: DentacarePage;

  beforeEach(() => {
    page = new DentacarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
