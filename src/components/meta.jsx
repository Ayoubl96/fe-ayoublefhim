import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, type }) => {
  const combinedTitle = `${title} - Ayoub Lefhim`;
  return (
    <Helmet>
      <title>{combinedTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={combinedTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content="Ayoub Lefhim" />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={combinedTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SEO