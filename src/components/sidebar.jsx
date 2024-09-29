import React from "react";
import useFetch from "../hooks/useFetch";
import ReactMarkdown from "react-markdown";

const Sidebar = () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}api/sidebar?populate=*`;
  console.log(apiUrl);
  let { loading, data, error } = useFetch(apiUrl);
  if (loading) return <p>Loading</p>;
  if (error) return <p> {error} </p>;

  const sidebarInfo = data;

  console.log(sidebarInfo);

  return (
    <header className="lg:self-start lg:sticky lg:col-span-3 lg:top-10">
      <img
        className="rounded-full mt-10 shadow-xl"
        src={sidebarInfo.data.avatar.url}
        width="150"
        height="150"
        alt="avatar"
      ></img>

      <p className="py-2 text-xl mt-5 font-black text-black">
        {sidebarInfo.data.jobtitle}{" "}
        <span className="text-primary">
          @{sidebarInfo.data.current_company}
        </span>
      </p>
      <ReactMarkdown>{sidebarInfo.short_desc}</ReactMarkdown>

      <a
        href={sidebarInfo.data.linkedin_url}
        target="_blank"
        className="flex pt-6 font-semibold text-black transition hover:text-primary"
      >
        Linkedin &#8594;
      </a>
      <a
        href={sidebarInfo.data.mail_url}
        className="flex py-3 font-semibold text-black transition hover:text-primary"
      >
        Mail &#8594;
      </a>
    </header>
  );
};

export default Sidebar;
