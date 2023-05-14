import { createAction } from '../../utils/reduce/reduce.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

// export const setCategoriesMap = categoryMap =>
//   createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap);
export const setCategories = category =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, category);
