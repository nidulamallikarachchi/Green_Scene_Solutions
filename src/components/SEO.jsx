import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

function SEO({ title, description }) {
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
        </Helmet>
    );
}

export default SEO;

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};
