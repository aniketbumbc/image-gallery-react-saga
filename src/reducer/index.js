import { combineReducers } from 'redux';

import loadingReducer from '../reducer/loadingReducer';
import imagesReducer from '../reducer/imagesReducer';
import errorReducer from '../reducer/errorReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
});

export default rootReducer;
