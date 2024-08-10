import React from "react";
import { Homepage, Blog, PostPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App() {
  const apiUrl = `${import.meta.env.VITE_API_URL}api/posts?populate=*`;
  let { loading, data, error } = useFetch(apiUrl);
  if (loading) return <p>Loading</p>;
  if (error) return <p> {error} </p>;

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage posts={data ? data : ""} />}></Route>
        <Route path="/blog" element={<Blog posts={data ? data : ""} />}></Route>
        <Route
          path="/post/:id"
          element={<PostPage posts={data ? data : ""} />}
        ></Route>
      </Routes>
    </>
  );
}
