"use client";
import "@styles/global.css";
import Nav from "@components/Nav/Nav";
import Provider from "@components/Provider/Provider";

export const metadata = {
  title: "IdeasTopia",
  description: "Discover & Share AI Prompts and Ideas",
};

const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
