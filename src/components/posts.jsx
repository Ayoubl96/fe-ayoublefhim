import { Link } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";

// eslint-disable-next-line react/prop-types
const Posts = ({ posts }) => {
  return (
    <>
      {//eslint-disable-next-line react/prop-types
      posts.data.map((post) => {
        // Format the date before rendering it
        const formattedDate = formatDate(post.createdAt);
        const tags = post.categories || [];

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
                      className="text-xs font-bold uppercase bg-primary text-white p-1 rounded dark:text-white"
                    >
                      {tag.category_name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:col-span-2 lg:order-3 lg:place-self-end  dark:text-white">
              {formattedDate}
            </div>
            <Link
              to={`/post/${post.id}/${post.title}`}
              className="lg:col-span-8 font-semibold text-black lg:order-1 transition hover:text-primary hover:translate-x-1 dark:text-white"
            >
              {post.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
