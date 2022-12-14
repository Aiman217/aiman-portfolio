import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Work from "../components/Work";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio website of Muhammad Aiman Arif Bin Baharudin (146824)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div data-theme="light" className="bg-[url('/background.svg')]">
        <Navbar />
        <div className="bg=[url('/background.svg')]">
          <Hero />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 pb-20">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <Education />
              <Work />
            </div>
            <Skill />
          </div>
        </div>
      </div>
    </>
  );
}
