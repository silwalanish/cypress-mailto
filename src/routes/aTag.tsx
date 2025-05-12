import React, { useEffect } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aTag")({
  component: RouteComponent,
});

function RouteComponent() {
  const fromRef = React.useRef<HTMLFormElement>(null);
  const hiddenARef = React.useRef<HTMLAnchorElement>(null);
  const [action, setAction] = useState("");

  useEffect(() => {
    if (action && hiddenARef.current) {
      hiddenARef.current?.click();
    }
  }, [hiddenARef, action]);

  const handleSendEmail = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = fromRef.current;
    if (!form) return;

    const email = form.email.value;
    const subject = form.subject.value;
    const body = form.body.value;

    setAction(`mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`);
  }, [fromRef, setAction]);

  return (
    <>
      <h1>Send Email using form.action</h1>
      <a style={{ display: 'none' }} href={action} ref={hiddenARef} target="sendMail" data-testid="email-link" />
      <form
        ref={fromRef}
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
        <button type="button" data-testid="send-button" onClick={handleSendEmail}>
          Send Email
        </button>
      </form>
    </>
  );
}
