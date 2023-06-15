import { CommonObjects } from "../CommonObjects"
export class AddHero {


    //locators
    static addButton = ():string => "//button[normalize-space()='Add hero']";
    static newHeroInput= ():string => "//input[@id='new-hero']"

    //action
    static EnterHero(name) {
        cy.xpath(this.newHeroInput()).type(name);
        cy.xpath(this.addButton()).click();
    }

    static VerifyHeroAdded(name) {
        cy.xpath
    } 

}