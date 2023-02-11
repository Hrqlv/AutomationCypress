/// <reference types="cypress" />

import LoginPage from "../pages/login.Page";

describe("Saucedemo - NextQA - Cypress", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("./dados-login.json").as("dados");
  });

  it("Realizar a compra de um produto com sucesso", () => {
    cy.login("@dados").then((dados) => {
      LoginPage.login(dados.valid.user, dados.valid.password);
    });
    cy.get("span[class=title]").should("have.text", "Products");
  });
  it("Validar login com senha inválida", () => {
    LoginPage.login("standar_user", "secret-saucess");
    cy.get("[data-teste-error]").should(
      "have text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
