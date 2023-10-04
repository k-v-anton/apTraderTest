import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { createProjectPopUpReducer } from './createProjectPopUpReducer/createProjectPopUpReducer'

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { addTaskPopupReducer } from './addTaskPopupReducer/AddTaskPopupReducer'
import { previewPopupReducer } from './previewPopupReducer/previewPopupReducer'
import { previewTaskReducer } from './previewTask/previewTaskReducer'
import { projectsReducer } from './projectsReducer/projectReducer'
import { tasksReducer } from './tasksReducer/tasksReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  popUpcreateProject: createProjectPopUpReducer,
  popupAddTask: addTaskPopupReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  previewPopup: previewPopupReducer,
  previewTask: previewTaskReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  // reducer: rootReducer,
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
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, GlobalStoreStateType, unknown, Action<string>>
