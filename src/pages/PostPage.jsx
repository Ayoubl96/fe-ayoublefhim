import React from "react";
import { Navbar, Footer, Post } from "../components/";

const PostPage = ({ posts }) => {
  return (
    <>
      <Navbar />
      <Post posts={posts ? posts : ""} />
      <Footer />
    </>
  );
};

export default PostPage;
