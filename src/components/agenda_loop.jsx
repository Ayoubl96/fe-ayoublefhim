import { Link } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";
import useFetch from "../hooks/useFetch";

const Agenda_loops = () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}api/agendas?populate=*`;
  const { loading, data, error } = useFetch(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  // Controllo che `data.data` sia un array
  if (!data || !data.data || !Array.isArray(data.data)) {
    console.error("Unexpected data structure:", data);
    return <p>No experiences found.</p>;
  }

  // Ordina i dati per `createdAt` in ordine decrescente
  const agendas = [...data.data].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA; // Ordina in ordine decrescente
  });

  return (
    <>
      {agendas.map((agenda) => {
        // Format the date before rendering it
        const formattedDate = formatDate(agenda.createdAt);
        return (
          <div
            key={agenda.id} // Use agenda.id as the key for better uniqueness
            className="w-full grid py-2 lg:grid-cols-12 border-b"
          >
            <div className="lg:col-span-2 lg:order-3 lg:place-self-end dark:text-white">
              {formattedDate}
            </div>
            <Link
              to={`/agenda/${agenda.id}`}
              className="lg:col-span-8 font-semibold text-black lg:order-1 transition hover:text-primary hover:translate-x-1 dark:text-white"
            >
              {agenda.week}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Agenda_loops;
