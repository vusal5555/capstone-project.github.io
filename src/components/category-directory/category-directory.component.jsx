import DirectoryItem from '../directory-item/directory-item.component';
import './categories.style.scss';

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(category => {
        return (
          <DirectoryItem category={category} key={category.id}></DirectoryItem>
        );
      })}
    </div>
  );
};

export default CategoryDirectory;
