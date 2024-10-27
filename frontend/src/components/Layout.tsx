import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

type LayoutProps = PropsWithChildren;

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
        <header>
            <Navigation />
        </header>
        <main className="container">
            {children}
        </main>
        <Footer />
    </>
  );
}