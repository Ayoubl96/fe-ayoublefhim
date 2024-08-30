import { Navbar, Footer, Agenda_loop } from "../components/";

const Agenda = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-36">
        <h1 className="text-2xl font-bold text-black">All Weekly</h1>
        <div className="flex mt-5 gap-1">Tag Filter</div>
        <section className="py-10">
          <Agenda_loop />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Agenda;
