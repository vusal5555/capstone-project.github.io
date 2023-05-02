import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory.item.style.jsx';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(category.route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imgUrl={category.imageUrl}></BackgroundImage>
      <Body>
        <h2>{category.title}</h2>
        <p>Shop Now!</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
