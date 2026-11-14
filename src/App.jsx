import { Homepage, Blog, PostPage, Agenda, Privacy, Terms } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { Analytics } from "@vercel/analytics/react";
import AgendaPage from "./pages/AgendaPage.jsx";

export default function App() {
  const apiUrl = `${import.meta.env.VITE_API_URL}api/posts?populate=*`;
  let { loading, data, error } = useFetch(apiUrl);
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/privacy") return <Privacy />;
  if (path === "/terms") return <Terms />;
  if (loading) return <p>Loading</p>;
  if (error) return <p> {error} </p>;

  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<Homepage posts={data ? data : ""} />}></Route>
        <Route path="/blog" element={<Blog posts={data ? data : ""} />}></Route>
        <Route path="/agenda" element={<Agenda />}></Route>
        <Route
          path="/post/:id/:title"
          element={<PostPage posts={data ? data : ""} />}
        ></Route>
        <Route
          path="/agenda/:id/"
          element={<AgendaPage />}
        ></Route>
      </Routes>
    </>
  );
}
