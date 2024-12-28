import { Link } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";
import useFetch from "../hooks/useFetch";

const Agenda_loops = () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}api/agendas?populate=*`;
  let { loading, data, error } = useFetch(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;


  if (!data || !data.data || !Array.isArray(data.data)) {
    return <p>No experiences found.</p>;
  }

  const agendas = data.data;
  return (
    <>
      {agendas.map((agendas) => {
        // Format the date before rendering it
        const formattedDate = formatDate(agendas.createdAt);
        return (
          <div
            key={agendas.id} // Use post.id as the key for better uniqueness
            className="w-full grid py-2 lg:grid-cols-12 border-b"
          >
            <div className="lg:col-span-2 lg:order-3 lg:place-self-end  dark:text-white">
              {formattedDate}
            </div>
            <Link
              to={`/agenda/${agendas.id}`}
              className="lg:col-span-8 font-semibold text-black lg:order-1 transition hover:text-primary hover:translate-x-1  dark:text-white"
            >
              {agendas.week}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Agenda_loops;
