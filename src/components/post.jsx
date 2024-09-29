import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { SEO } from "./meta.jsx";
import PropTypes from 'prop-types';

const Post = ({ posts }) => {
  const { id } = useParams();

  // Convert id to a string
  const stringId = String(id);

  // Use find instead of filter for a single match
  let post = posts.data.find((post) => String(post.id) === stringId);
  post = post || {}; // Handle case where post might not be found

  const {
    title,
    coverImg,
    content,
    SEO: seo,
    categories
  } = post || {}; // Handle case where attributes might be undefined

  const tags = categories?.data || [];

  if (!post.id) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <SEO
        title={seo?.meta_title}
        description={seo?.meta_description}
        type='article'
      />
      <article className="mt-36 prose prose-sm md:prose-base mx-auto">
        <h1 className="text-xl">{title}</h1>
        <img
          src={coverImg?.formats?.large?.url}
          alt={title || 'Cover image'}
          className="w-full h-auto"
        />
        {tags.length > 0 && (
          <div className="flex gap-1">
            {tags.map((tag) => (
              <span
                key={tag.id} 
                className="text-xs font-bold uppercase bg-primary text-white p-1 rounded"
              >
                {tag.category_name}
              </span>
            ))}
          </div>
        )}
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </>
  );
};

Post.propTypes = {
  posts: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired, // Ensure id is a string
        attributes: PropTypes.shape({
          title: PropTypes.string.isRequired,
          coverImg: PropTypes.shape({
            data: PropTypes.shape({
              attributes: PropTypes.shape({
                url: PropTypes.string.isRequired
              }).isRequired
            }).isRequired
          }).isRequired,
          content: PropTypes.string.isRequired,
          SEO: PropTypes.shape({
            meta_title: PropTypes.string,
            meta_description: PropTypes.string
          }),
          categories: PropTypes.shape({
            data: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string.isRequired, // Assuming categories' IDs are strings
                attributes: PropTypes.shape({
                  category_name: PropTypes.string.isRequired
                }).isRequired
              })
            ).isRequired
          }).isRequired
        }).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default Post;
