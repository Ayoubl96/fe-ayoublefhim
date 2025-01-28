import { Link } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";
import useFetch from "../hooks/useFetch";

const Agenda = () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}api/agendas?populate=*`;
  const { loading, data, error } = useFetch(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  // Controllo che `data.data` sia un array
  if (!data || !data.data || !Array.isArray(data.data)) {
    console.error("Unexpected data structure:", data);
    return <p>No agendas found.</p>;
  }

  // Ordina i dati per `createdAt` in ordine decrescente
  const agendas = [...data.data].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA; // Ordina in ordine decrescente
  });

  return (
    <section className="lastposts py-4">
      {agendas.slice(0, 5).map((agenda) => {
        const formattedDate = formatDate(agenda.createdAt);

        return (
          <div
            key={agenda.id}
            className="w-full grid py-2 lg:grid-cols-12 border-b border-slate-500"
          >
            <div className="lg:order-2 lg:col-span-3 lg:justify-self-end dark:text-white">
              {formattedDate}
            </div>
            <Link
              to={`/agenda/${agenda.id}`}
              className="lg:order-1 lg:col-span-9 font-semibold text-black transition hover:text-primary hover:translate-x-1 dark:text-white"
            >
              {agenda.week}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Agenda;
