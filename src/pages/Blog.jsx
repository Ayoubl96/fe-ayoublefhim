import React from "react";
import { Navbar, Footer, Posts, SEO } from "../components/";

const Blog = ({ posts }) => {
  return (
    <>
      <SEO
        title='Learning React Helmet!'
        description='Beginner friendly page for learning React Helmet.'
        name='Company name.'
        type='article'
      />
      <Navbar />
      <main className="flex flex-col mt-36">
        <h1 className="text-2xl font-bold text-black">All posts</h1>
        <div className="flex mt-5 gap-1">Tag Filter</div>
        <section className="py-10">
          <Posts posts={posts ? posts : ""} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
