import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

// .category-preview-container {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;

//   .title {
//     font-size: 28px;
//     margin-bottom: 25px;
//     cursor: pointer;
//   }

//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//   }
// }
