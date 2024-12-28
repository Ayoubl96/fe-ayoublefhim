import useFetch from "../hooks/useFetch";

const Experience = () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}api/experiences?populate=*`;
  let { loading, data, error } = useFetch(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;


  if (!data || !data.data || !Array.isArray(data.data)) {
    return <p>No experiences found.</p>;
  }

  const jobs = data.data;

  return (
    <section className="experience py-4  dark:text-white">
      {jobs.map((job, index) => {
        // Use index as part of the key to ensure uniqueness
        return (
          <div
            key={`${job.id}-${index}`} // Changed key to be more unique
            className="grid py-2 lg:grid-cols-12 border-b border-slate-500"
          >
            <div className="lg:col-span-4">{job.year}</div>
            <div className="lg:col-span-6 font-semibold ">
              {job.role}
            </div>
            <div className="lg:col-span-2 justify-self-end">
              {job.company}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;



