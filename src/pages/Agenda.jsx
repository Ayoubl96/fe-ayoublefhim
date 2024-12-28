import { Navbar, Footer, Agenda_loop } from "../components/";

const Agenda = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-36">
        <h1 className="text-2xl font-bold text-black dark:text-white">All Weekly</h1>
        <section className="py-10">
          <Agenda_loop />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Agenda;
