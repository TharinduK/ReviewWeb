import { ReviewWebPage } from './app.po';

describe('review-web App', function() {
  let page: ReviewWebPage;

  beforeEach(() => {
    page = new ReviewWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
