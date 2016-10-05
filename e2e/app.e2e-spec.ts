import { MEANToDoPage } from './app.po';

describe('mean-to-do App', function() {
  let page: MEANToDoPage;

  beforeEach(() => {
    page = new MEANToDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
