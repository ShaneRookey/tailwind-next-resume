"use client";
import Socials from "@/components/footer/socials";
import Header from "@/components/header/header";
import Nav from "@/components/nav/Nav";
import Fun from "./fun/fun";
import Home from "./home/home";
import Resume from "./resume/resume";

export default function App() {
  return (
    <>
      <Nav />
      <Header id="home" />
      <div>
        <>
          <section className="min-h-screen mt-2">
            <Home />
          </section>
          <section id="resume" className="mb-20 mx-auto">
            <Resume />
          </section>
          <section id="fun" className="mx-auto">
            <Fun />
          </section>
          <Socials />
        </>
      </div>
    </>
  );
}
