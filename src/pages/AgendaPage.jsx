import { Navbar, Footer, Agendasingle, SEO } from "../components/";

const Agendapage = () => {
  return (
    <>
      <SEO
        title='Ayoub Lefhim - Product Manager & Tech Enthusiast'
        description='Ayoub Lefhim - Product Manager & Tech Enthusiast. My agenda page'
        name='Ayoub Lefhim'
        type='article'
      />
      <Navbar />
       <Agendasingle />
      <Footer />
    </>
  );
};

export default Agendapage;
