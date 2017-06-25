import { ApoloPage } from './app.po';

describe('apolo App', () => {
  let page: ApoloPage;

  beforeEach(() => {
    page = new ApoloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
