import type { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

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