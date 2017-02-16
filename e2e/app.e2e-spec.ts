import { TeddyTimingPage } from './app.po';

describe('teddy-timing App', function() {
  let page: TeddyTimingPage;

  beforeEach(() => {
    page = new TeddyTimingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
