import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/locationHref")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>Send Email using window.location.href</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const email = form.email.value;
          const subject = form.subject.value;
          const body = form.body.value;

          // Not testable in Cypress
          window.location.href = `mailto:${email}?subject=${encodeURIComponent(
            subject,
          )}&body=${encodeURIComponent(body)}`;
        }}
        data-testid="email-form"
      >
        <div>
          <label>
            To:
            <input
              type="email"
              name="email"
              placeholder="Recipient's email"
              required
              data-testid="email-input"
            />
          </label>
        </div>
        <div>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              placeholder="Email subject"
              required
              data-testid="subject-input"
            />
          </label>
        </div>
        <div>
          <label>
            Body:
            <textarea
              name="body"
              placeholder="Write your message here..."
              required
              data-testid="body-textarea"
            ></textarea>
          </label>
        </div>
        <button type="submit" data-testid="send-button">
          Send Email
        </button>
      </form>
    </>
  );
}
