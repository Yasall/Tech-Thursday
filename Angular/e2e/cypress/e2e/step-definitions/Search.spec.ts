import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { Search } from "../PageObjects/Search";

Given(`I am on landing page`, () => {
    cy.visit("http://localhost:4200/dashboard");
});

When(`I search for a {string}`, (hero: string) => {
    Search.SearchHero(hero);
});

Then(`the {string} details will show`, (hero:string) => {
    Search.verifyHero(hero);
});

