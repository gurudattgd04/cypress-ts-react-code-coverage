/// <reference types="cypress" />

import { CardPreview } from "./CardPreview";

describe("Card component test", () => {
  it("Card Preview component test", () => {
    const expectedTerm = "this is a term";
    const expectedDef = "this is a def";
    //@ts-ignore
    cy.mount(<CardPreview definition={expectedDef} term={expectedTerm} />);
    cy.contains("this is a term").should("be.visible");
    cy.contains("[data-testid='tertiary']", "show back").click();
    cy.contains("this is a def").should("be.visible");
    cy.contains("[data-testid='tertiary']", "show front").should("be.visible");
  });
});
