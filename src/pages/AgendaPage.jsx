import { Navbar, Footer, Agendasingle, SEO } from "../components/";

const Agendapage = () => {
  return (
    <>
      <SEO
        title='Learning React Helmet!'
        description='Beginner friendly page for learning React Helmet.'
        name='Company name.'
        type='article'
      />
      <Navbar />
       <Agendasingle />
      <Footer />
    </>
  );
};

export default Agendapage;
