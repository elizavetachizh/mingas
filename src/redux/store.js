import { combineReducers, configureStore } from '@reduxjs/toolkit';

//import reducers
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
import { tendersAPI } from './services/tenders';
import { TVAPI } from './services/TV';
import { documentsEDIAPI } from './services/documentsEDI';
import { vacanciesAPI } from './services/vacancies';
import { usefulResourcesAPI } from './services/usefulResources';
import { ecoBoxThemeAPI } from './services/ecoBoxTheme';
import { ecoBoxContentAPI } from './services/ecoBoxContent';

const rootReducer = combineReducers({
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
  [TVAPI.reducerPath]: TVAPI.reducer,
  [documentsEDIAPI.reducerPath]: documentsEDIAPI.reducer,
  [vacanciesAPI.reducerPath]: vacanciesAPI.reducer,
  [usefulResourcesAPI.reducerPath]: usefulResourcesAPI.reducer,
  [ecoBoxThemeAPI.reducerPath]: ecoBoxThemeAPI.reducer,
  [ecoBoxContentAPI.reducerPath]: ecoBoxContentAPI.reducer,
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
    ...getDefaultMiddleware().concat(TVAPI.middleware),
    ...getDefaultMiddleware().concat(documentsEDIAPI.middleware),
    ...getDefaultMiddleware().concat(vacanciesAPI.middleware),
    ...getDefaultMiddleware().concat(usefulResourcesAPI.middleware),
    ...getDefaultMiddleware().concat(ecoBoxThemeAPI.middleware),
    ...getDefaultMiddleware().concat(ecoBoxContentAPI.middleware),
  ],
});
