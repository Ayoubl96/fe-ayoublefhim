import { Homepage, Blog, PostPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App() {
  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/posts?populate=*",
  );
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
