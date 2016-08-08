import { DesignAnalysisPage } from './app.po';

describe('design-analysis App', function() {
  let page: DesignAnalysisPage;

  beforeEach(() => {
    page = new DesignAnalysisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
