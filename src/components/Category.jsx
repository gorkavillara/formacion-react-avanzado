import PropTypes from "prop-types";
import "./Category.css"
const Category = ({ category }) => {
  return (
    <div
      className="Category"
      style={{
        backgroundImage: `url(${category.imgUrl})`,
      }}
    >
      <div className="overlay"></div>
      <span className="title">{category.name}</span>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
