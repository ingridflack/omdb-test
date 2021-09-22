/// <reference types="Cypress" />

describe("Main integration tests", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit(Cypress.env("url"));
  });

  it("should search and list the movies", () => {
    cy.get("[data-cy=input]").type("Barbie");
    cy.get("[data-cy=movie-card]").should("have.length.at.least", 1);
  });

  it("should open the movie detail page", () => {
    let movieTitle = "";

    cy.get("[data-cy=input]").type("Barbie");

    cy.get("[data-cy=movie-card]")
      .first()
      .then(($element) => {
        movieTitle = $element.find("[data-cy=movie-card-title]").text();

        cy.get("[data-cy=movie-card]").first().click();
        cy.get("[data-cy=movie-title").should("have.text", movieTitle);
      });
  });

  it("should render diferent results", () => {
    let firstMovieTitle = "";
    let secondMovieTitle = "";

    cy.get("[data-cy=input]").type("Barbie");

    cy.get("[data-cy=movie-card]")
      .first()
      .then(($element) => {
        firstMovieTitle = $element.find("[data-cy=movie-card-title]").text();

        cy.intercept(/page=2/).as("pagination");
        cy.get('[aria-label="Page 2"]').click();
        cy.wait("@pagination");

        cy.get("[data-cy=movie-card]")
          .first()
          .then(($element) => {
            secondMovieTitle = $element
              .find("[data-cy=movie-card-title]")
              .text();

            expect(firstMovieTitle).not.equal(secondMovieTitle);
          });
      });
  });

  it("should mark a movie as favorite", () => {
    cy.get("[data-cy=input]").type("Barbie");
    cy.get("[data-cy=movie-card]").first().realHover({
      pointer: "mouse",
      position: "center",
      scrollBehavior: "center",
    });

    cy.get("[data-cy=movie-card]")
      .first()
      .find("[data-cy=favorite-button-unchecked]")
      .should("exist");

    cy.get("[data-cy=movie-card]")
      .first()
      .find("[data-cy=favorite-button]")
      .click();

    cy.get("[data-cy=movie-card]")
      .first()
      .find("[data-cy=favorite-button-checked]")
      .should("exist");
  });
});
