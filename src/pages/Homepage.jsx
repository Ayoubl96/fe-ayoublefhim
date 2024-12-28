import { Navbar, Sidebar, Lastpost, Footer, Agenda, Experience } from "../components/";
import Section from "../components/section";
// eslint-disable-next-line react/prop-types
const Homepage = ({ posts }) => {
  return (
    <>
      <Navbar />
      <main className="w-full lg:grid lg:grid-cols-10 mt-36">
        <Sidebar />
        <div className="mt-20 lg:mt-10 lg:col-start-5 lg:col-span-full">
          <Section title="Agenda">
            <Agenda />
          </Section>
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
