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
import { managementAPI } from './services/management';
import { questionAnswerAPI } from './services/questonAnswer';
import { ogonekAPI } from './services/ogonek';
import { mainCorruptionAPI } from './services/corruption';
import {tendersAPI} from "./services/tenders";

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
  [managementAPI.reducerPath]: managementAPI.reducer,
  [questionAnswerAPI.reducerPath]: questionAnswerAPI.reducer,
  [ogonekAPI.reducerPath]: ogonekAPI.reducer,
  [mainCorruptionAPI.reducerPath]: mainCorruptionAPI.reducer,
  [tendersAPI.reducerPath]: tendersAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(servicesAPI.middleware),
    ...getDefaultMiddleware().concat(mainPostsAPI.middleware),
    ...getDefaultMiddleware().concat(postsAPI.middleware),
    ...getDefaultMiddleware().concat(divisionsAPI.middleware),
    ...getDefaultMiddleware().concat(managementAPI.middleware),
    ...getDefaultMiddleware().concat(questionAnswerAPI.middleware),
    ...getDefaultMiddleware().concat(ogonekAPI.middleware),
    ...getDefaultMiddleware().concat(mainCorruptionAPI.middleware),
    ...getDefaultMiddleware().concat(tendersAPI.middleware),
  ],
});
