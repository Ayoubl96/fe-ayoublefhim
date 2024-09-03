import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { SEO } from "./meta.jsx"

const Post = ({ posts }) => {
  const { id } = useParams();

  let post = posts.data.filter((post) => post.id == id);
  post = post[0];
  const tags = post.attributes.categories.data || [];
  return (
    <>
      <SEO
        title={post.attributes.SEO.meta_title}
        description={post.attributes.SEO.meta_description}
        type='article'
      />
      <article className="mt-36 prose prose-sm md:prose-base  mx-auto">
        <h1 className="text-xl">{post.attributes.title}</h1>
        <img
          src={post.attributes.coverImg.data.attributes.url}
          alt={post.attributes.title}
          className="w-full h-auto"
        />
        {tags.length > 0 && (
          <div className="flex gap-1">
            {tags.map((tag) => (
              <span
                key={tag.id} 
                className="text-xs font-bold uppercase bg-primary text-white p-1 rounded"
              >
                {tag.attributes.category_name}
              </span>
            ))}
          </div>
        )}
        <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
      </article>
    </>
  );
};

export default Post;
