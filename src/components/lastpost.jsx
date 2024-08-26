import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";

const Lastpost = ({ posts }) => {
  return (
    <section className="lastposts py-4">
      {posts.data.slice(0, 5).map((post) => {
        const formattedDate = formatDate(post.attributes.createdAt); // Correct placement of variable

        return (
          <div
            key={post.attributes.title}
            className="w-full grid py-2 lg:grid-cols-12 border-b border-slate-500"
          >
            <div className="lg:order-2 lg:col-span-3 lg:justify-self-end">
              {formattedDate}
            </div>
            <Link
              to={"/post/" + post.id}
              className="lg:order-1 lg:col-span-9 font-semibold text-black transition hover:text-primary hover:translate-x-1"
            >
              {post.attributes.title}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Lastpost;
