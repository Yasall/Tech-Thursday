Feature: Adding a hero Feature

Scenario: I want to add a new hero to the list
Given I am on heroes page
When I enter the name of the hero "Me"
Then the new hero should show on the list of heroes
