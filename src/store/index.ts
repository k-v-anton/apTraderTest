import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createProjectPopUpReducer } from "./createProjectPopUpReducer/createProjectPopUpReducer";

import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { projectsReducer } from "./projectsReducer/projectReducer";

const persistConfig = {
  key: 'root',
  storage,
}


const rootReducer = combineReducers({
  popUpcreateProject: createProjectPopUpReducer,
  projects: projectsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type GlobalStoreStateType = ReturnType<typeof store.getState>
export type GlobalStoreDispatchType = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, GlobalStoreStateType, unknown, Action<string>>
