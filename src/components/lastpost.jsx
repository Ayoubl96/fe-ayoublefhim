/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";

 
function Lastpost({ posts }) {
  return (
    <section className="lastposts py-4">
      {posts.data.slice(0, 5).map((post) => {
        const formattedDate = formatDate(post.createdAt); // Correct placement of variable
        return (
          <div
            key={post.title}
            className="w-full grid py-2 lg:grid-cols-12 border-b border-slate-500"
          >
            <div className="lg:order-2 lg:col-span-3 lg:justify-self-end dark:text-white">
              {formattedDate}
            </div>
            <Link
              to={"/post/" + post.id + "/" + post.title}
              className="lg:order-1 lg:col-span-9 font-semibold text-black transition hover:text-primary hover:translate-x-1 dark:text-white"
            >
              {post.title}
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default Lastpost;
