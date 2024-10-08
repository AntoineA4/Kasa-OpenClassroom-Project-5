import PropTypes from 'prop-types';
import "../styles/components/Tags.scss";

const Tags = ({ tags }) => {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    );
};

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;