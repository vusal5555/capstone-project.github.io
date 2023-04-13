import Category from "../category-item/category-item.component";
import "./categories.style.scss";

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Category category={category} key={category.id}></Category>;
      })}
    </div>
  );
};

export default CategoryDirectory;
