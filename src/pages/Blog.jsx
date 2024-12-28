import { Navbar, Footer, Posts, SEO } from "../components/";

// eslint-disable-next-line react/prop-types
const Blog = ({ posts }) => {
  return (
    <>
      <SEO
        title='Ayoub Lefhim - Product Manager & Tech Enthusiast'
        description='Ayoub Lefhim - Product Manager & Tech Enthusiast. My blog page'
        name='Ayoub Lefhim'
        type='article'
      />
      <Navbar />
      <main className="flex flex-col mt-36">
        <h1 className="text-2xl font-bold text-black dark:text-white">All posts</h1>
        <section className="py-10">
          <Posts posts={posts ? posts : ""} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
