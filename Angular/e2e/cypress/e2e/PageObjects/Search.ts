export class Search {

    //Selectors
    static searchInput = ():string => "//input[@id='search-box']";
    static searchResult = (name):string => "//ul[@class='search-result']//a[contains(text(),'" + name + "')]";
    static heroHeader = ():string => "//div//h2[contains(text(),'Details')]";

    //ActionMethods
    static SearchHero(name) {
        cy.xpath(this.searchInput()).type(name);
        cy.xpath(this.searchResult(name)).click();
    }

    static verifyHero(name) {
        cy.xpath(this.heroHeader()).should('have.text', name.toUpperCase() + " Details");
    }
}