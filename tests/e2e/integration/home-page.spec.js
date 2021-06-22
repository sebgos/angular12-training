/// <reference types="Cypress" />

describe("Home Page", () => {
  it("should display the app name on the home page", () => {
    cy.visit("/"); // go to the home page

    // get the h3 element and verify that the app name is in it
    cy.get("app-albums h3").should("contain.text", "Albums collection");
  });

  it("should display albums list", () => {
    cy.visit("/"); // go to the home page
    cy.get(".row.albums").children().should("have.length.gt", 0);
  });
});
