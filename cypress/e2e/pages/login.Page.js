class LoginPage {
  login(user, password) {
    cy.findByid("user-name").type(user);
    cy.findByid("password").type(password);
    cy.findByid("login-button").click();
  }
}

export default new LoginPage();