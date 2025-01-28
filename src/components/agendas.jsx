import { Link } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";
import useFetch from "../hooks/useFetch";

const Agenda = () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}api/agendas?populate=*`;
  let { loading, data, error } = useFetch(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  if (!data || !data.data || !Array.isArray(data.data)) {
    return <p>No experiences found.</p>;
  }

  // Sort the agendas array in descending order based on the `createdAt` property
  const agendas = data.sort((a, b) => {
    const dateA = new Date(a.attributes.createdAt);
    const dateB = new Date(b.attributes.createdAt);
    return dateB - dateA; // Descending order
  });

  return (
    <section className="lastposts py-4">
      {agendas.slice(0, 5).map((agenda) => {
        const formattedDate = formatDate(agenda.attributes.createdAt);

        return (
          <div
            key={agenda.id}
            className="w-full grid py-2 lg:grid-cols-12 border-b border-slate-500"
          >
            <div className="lg:order-2 lg:col-span-3 lg:justify-self-end  dark:text-white">
              {formattedDate}
            </div>
            <Link
              to={"/agenda/" + agenda.id}
              className="lg:order-1 lg:col-span-9 font-semibold text-black transition hover:text-primary hover:translate-x-1  dark:text-white"
            >
              {agenda.attributes.week}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Agenda;
