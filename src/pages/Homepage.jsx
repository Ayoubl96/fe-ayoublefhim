import { Navbar, Sidebar, Lastpost, Footer } from "../components/";
import Section from "../components/section";
import Experience from "../components/experience.jsx";

const Homepage = ({ posts }) => {
  return (
    <>
      <Navbar />
      <main className="w-full lg:grid lg:grid-cols-10 mt-36">
        <Sidebar />
        <div className="mt-20 lg:mt-10 lg:col-start-5 lg:col-span-full">
          <Section title="Last posts">
            <Lastpost posts={posts ? posts : ""} />
          </Section>
          <Section title="Experience">
            <Experience/>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
