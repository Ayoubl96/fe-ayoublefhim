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

  const agendas = data.data;
  return (
    <section className="lastposts py-4">
      {agendas.slice(0, 5).map((agendas) => {
        const formattedDate = formatDate(agendas.createdAt); // Correct placement of variable

        return (
          <div
            key={agendas.week}
            className="w-full grid py-2 lg:grid-cols-12 border-b border-slate-500"
          >
            <div className="lg:order-2 lg:col-span-3 lg:justify-self-end">
              {formattedDate}
            </div>
            <Link
              to={"/agenda/" + agendas.id}
              className="lg:order-1 lg:col-span-9 font-semibold text-black transition hover:text-primary hover:translate-x-1"
            >
              {agendas.week}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Agenda;
