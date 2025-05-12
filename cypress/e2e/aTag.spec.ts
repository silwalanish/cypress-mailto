describe("Send Mail", () => {
  beforeEach(() => {
    cy.visit("/aTag");
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

    // Validate the action field of email form.
    cy.get('[data-testid="email-link"]').should(
      "have.attr",
      "href",
      "mailto:test@example.com?subject=Test%20Subject&body=This%20is%20a%20test%20email%20body.",
    );
  });
});
