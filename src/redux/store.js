import { combineReducers, configureStore } from '@reduxjs/toolkit';

//import reducers
import servicesReducer from './slices/servicesSlice';
import mainPostsReducer from './slices/mainPostsSlice';
import postsReducer from './slices/postsSlice';
import departmentsReducer from './slices/departmentsSlice';

//import server API
import { servicesAPI } from './services/services';
import { mainPostsAPI } from './services/mainpost';
import { postsAPI } from './services/posts';
import { divisionsAPI } from './services/departmentsDivisions';

const rootReducer = combineReducers({
  services: servicesReducer,
  mainPosts: mainPostsReducer,
  posts: postsReducer,
  departments: departmentsReducer,

  //reducers
  [servicesAPI.reducerPath]: servicesAPI.reducer,
  [mainPostsAPI.reducerPath]: mainPostsAPI.reducer,
  [postsAPI.reducerPath]: postsAPI.reducer,
  [divisionsAPI.reducerPath]: divisionsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(servicesAPI.middleware),
    ...getDefaultMiddleware().concat(mainPostsAPI.middleware),
    ...getDefaultMiddleware().concat(postsAPI.middleware),
    ...getDefaultMiddleware().concat(divisionsAPI.middleware),
  ],
});
