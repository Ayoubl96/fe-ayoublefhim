import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.data.map((post) => {
        // Format the date before rendering it
        const formattedDate = formatDate(post.attributes.createdAt);
        const tags = post.attributes.categories.data || [];

        return (
          <div
            key={post.id} // Use post.id as the key for better uniqueness
            className="w-full grid py-2 lg:grid-cols-12 border-b"
          >
            <div className="hidden lg:block lg:col-span-2 lg:order-3 lg:place-self-end">
              {tags.length > 0 && (
                <div className="flex gap-1">
                  {tags.map((tag) => (
                    <span
                      key={tag.id} // Ensure unique key for each tag
                      className="text-xs font-bold uppercase bg-primary text-white p-1 rounded"
                    >
                      {tag.attributes.category_name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:col-span-2 lg:order-3 lg:place-self-end">
              {formattedDate}
            </div>
            <Link
              to={`/post/${post.id}`}
              className="lg:col-span-8 font-semibold text-black lg:order-1 transition hover:text-primary hover:translate-x-1"
            >
              {post.attributes.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
