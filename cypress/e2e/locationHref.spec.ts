describe("Send Mail", () => {
  beforeEach(() => {
    cy.visit("/locationHref", {
      onBeforeLoad(win) {
        // Doesn't work
        cy.stub(win, "location").as("locationStub");
      },
    });
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

    // Assert that the mailto link is generated correctly
    cy.get("@locationStub")
      .should("have.property", "href")
      .and("include", "mailto:test@example.com");
    cy.get("@locationStub")
      .should("have.property", "href")
      .and("include", "subject=Test%20Subject");
    cy.get("@locationStub")
      .should("have.property", "href")
      .and("include", "body=This%20is%20a%20test%20email%20body.");
  });
});
