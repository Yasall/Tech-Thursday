import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor';

Given(`I am on heroes page`, () => {
    cy.visit("http://localhost:4200/heroes");
});

When(`I enter the name of the hero {string}`, (hero : string) => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`the new hero should show on the list of heroes`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});