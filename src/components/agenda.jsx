import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { SEO } from "./meta.jsx";
import useFetch from "../hooks/useFetch";


const Agendasingle = () => {
  const { id } = useParams();
  const stringId = String(id);


  const apiUrl = `${import.meta.env.VITE_API_URL}api/agendas?populate=*`;

  let { loading, data, error } = useFetch(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  let agenda = data.data.find((agendas) => String(agendas.id) === stringId);

  if (!data || !data.data || !Array.isArray(data.data) || !agenda) {
    return (
      <article class="mt-36 prose prose-sm md:prose-base mx-auto">
        <p>Page not found</p>
        </article>
    )
  }




  return (
    <>
      <SEO
        title={agenda.SEO.meta_title}
        description={agenda.SEO.meta_description}
        type='article'
      />
      <article className="mt-36 prose prose-sm md:prose-base mx-auto">
        <h1 className="text-xl">{agenda.week}</h1>
        <ReactMarkdown>{agenda.content}</ReactMarkdown>
      </article>
    </>
  );
};


export default Agendasingle;
