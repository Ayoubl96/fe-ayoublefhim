import { Navbar, Footer, Post } from "../components/";

// eslint-disable-next-line react/prop-types
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
