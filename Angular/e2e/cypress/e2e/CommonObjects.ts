export class CommonObjects {
  DashboardButton = (): string => {
    return "//a[text()='Dashboard']";
  };
  HeroesButton = (): string => {
    return "//a[text()='Heroes']";
  };
  SelectFirstHero = (): string => {
    return "//div[@class='heroes-menu']/a[1]";
  };
  HeroSearchInput = (): string => {
    return "//input[@id='search-box']";
  };
  HeroSearchFirstItem = (): string => {
    return "//*[@id='search-component']/ul/li/a";
  };
  ClearButton = (): string => {
    return "//button[@class='clear']";
  };
  HeroNameInput = (): string => {
    return "//input[@id='hero-name']";
  };
  GoBackButton = (): string => {
    return "//button[text()='go back']";
  };
  SaveButton = (): string => {
    return "//button[text()='save']";
  };

  NewHero = (): string => {
    return "//input[@id='new-hero']";
  };

  
  ExecuteSearch() {
    this.ClickButtonByXpath(this.HeroSearchFirstItem());
  }

  ClickButtonByXpath(ElementXpath: string) {
    cy.xpath(ElementXpath).click();
  }
}
