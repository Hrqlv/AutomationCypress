/// <reference types="cypress" />

//import * as faker from '@faker-js/faker'
import { faker } from "@faker-js/faker";

const firstName = faker.name.firstName();

describe("Saucedemo - NextQA - Cypress", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Realizar a compra de um produto com sucesso", () => {
    cy.login("standard_user", "secret_sauce");
    cy.get("[id=add-to-cart-sauce-labs-onesie]").click();
    cy.get("[id=shopping_cart_container]").click();
    cy.get("[id=checkout]").click();
    cy.get("[id+first-name]").type(firstName);
    cy.log("[Digitou o nome do usuário: $(firstName)]");
    cy.get("[id=last-name]").type(faker.name.lastName());
    cy.get("[id=postal-code]").type("184010099");
    cy.get("[id=continue]").click();
    cy.get("[id=finish]").click();
    cy.get("[h2[class=complete-header]").should(
      "have-text",
      "THANK YOU FOR YOUR ORDER"
    );
  });
});
