Feature: Searching a hero

    Testing the feature of searching for a heero

Scenario Outline: As a toh user I want to search for a hero
    Given I am on landing page
    When I search for a "<hero>"
    Then the "<hero>" details will show

Examples:
    | hero   | 
    | Celeritas |
    | Magneta |
    