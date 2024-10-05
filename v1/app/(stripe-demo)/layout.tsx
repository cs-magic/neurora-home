import { type PropsWithChildren } from "react";

import "./styles.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className="container">{children}</div>
        <div className="banner">
          <span>
            Powered by{" "}
            <a href="https://stripe.com" target="_blank" rel="noreferrer">
              Stripe
            </a>
          </span>
        </div>
      </body>
    </html>
  );
}
