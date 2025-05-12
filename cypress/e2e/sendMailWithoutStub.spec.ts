// <reference types="lib.dom.d.ts" />

describe("Send Mail", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should generate the correct mailto link", () => {
    // Fill out the email input
    cy.get('[data-testid="email-input"]').type("test@example.com");

    // Fill out the subject input
    cy.get('[data-testid="subject-input"]').type("Test Subject");

    // Fill out the body textarea
    cy.get('[data-testid="body-textarea"]').type("This is a test email body.");

    // Click the send button
    cy.get('[data-testid="send-button"]').click();
  });
});
