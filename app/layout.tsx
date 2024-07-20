import "styles/globals.scss";
import Loading from "components/Loading";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{"DSR ELIXIR"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/DSR-logo.svg" />
      </head>
      <body>
        <Suspense fallback={<Loading />}>
          {children}
          <div id="modal-root"></div>
        </Suspense>
      </body>
    </html>
  );
}
